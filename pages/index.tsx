import React from "react";
import type { NextPage } from "next";
import { useRecoilState } from "recoil";
import GenerateButton from "@/components/main/GenerateButton";
import useLocalStoarge from "@/hooks/useLocalStoarge";
import { WindowType } from "@/types/main/window.interface";
import { windowState } from "@/context";
import FontSizeRange from "@/components/main/FontSizeRange";
import ColorPickers from "@/components/main/ColorPicker";
import Content from "@/components/main/Content";

const Main: NextPage = () => {
  const [window, setWindow] = useRecoilState<WindowType>(windowState);

  React.useEffect(() => {
    const windowOption = useLocalStoarge("get", "windowOption");
    if (windowOption) {
      setWindow(JSON.parse(windowOption));
    } else {
      useLocalStoarge("post", "windowOption", JSON.stringify(window));
    }
  }, []);

  return (
    <section id={`main`} className="p-12">
      <FontSizeRange window={{ state: window, setState: setWindow }} />

      <div className="flex flex-wrap gap-12 items-center">
        <ColorPickers
          window={{
            state: window,
            setState: setWindow,
          }}
        />
      </div>

      <div className="mt-12">
        <Content window={{ state: window, setState: setWindow }} />
      </div>

      <GenerateButton window={window} />
    </section>
  );
};

export default Main;
