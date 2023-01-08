import React from "react";
import type { NextPage } from "next";
import { useRecoilState } from "recoil";
import GenerateButton from "@/components/GenerateButton";
import useLocalStoarge from "@/hooks/useLocalStoarge";
import { WindowType } from "@/types/window.interface";
import { windowState } from "@/context";
import FontSizeRange from "@/components/FontSizeRange";
import ColorPickers from "@/components/ColorPicker";
import Content from "@/components/Content";
import Head from "next/head";

const Main: NextPage = () => {
  const [window, setWindow] = useRecoilState<WindowType>(windowState);
  const propsWindow = {
    state: window,
    setState: setWindow,
  };

  React.useEffect(() => {
    const windowOption = useLocalStoarge("get", "windowOption");
    if (windowOption) {
      setWindow(JSON.parse(windowOption));
    } else {
      useLocalStoarge("post", "windowOption", JSON.stringify(window));
    }
  }, []);

  return (
    <>
      <Head>
        <title>Text app</title>
      </Head>
      <section id={`main`} className="p-12">
        <FontSizeRange window={propsWindow} />

        <div className="flex flex-wrap gap-12 items-center">
          <ColorPickers window={propsWindow} />
        </div>

        <div className="mt-12">
          <Content window={propsWindow} />
        </div>

        <GenerateButton window={window} />
      </section>
    </>
  );
};

export default Main;
