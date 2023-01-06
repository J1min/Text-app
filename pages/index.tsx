import React from "react";
import { SketchPicker } from "react-color";
import type { NextPage } from "next";
import { useRecoilState } from "recoil";
import useModal from "@/hooks/useModal";
import SettingButton from "@/components/main/SettingButton";
import { Slider } from "@mui/material";
import useLocalStoarge from "@/hooks/useLocalStoarge";
import { WindowType } from "@/types/main/window.interface";
import { windowState } from "@/context";

const Main: NextPage = () => {
  const FontSizeModal = useModal();
  const [window, setWindow] = useRecoilState<WindowType>(windowState);

  React.useEffect(() => {
    const windowOption = useLocalStoarge("get", "windowOption");

    if (windowOption) {
      setWindow(JSON.parse(windowOption));
    } else {
      useLocalStoarge("post", "windowOption", JSON.stringify(window));
    }

    console.log(window);
  }, []);

  const handleFontSizeChange = (_: Event, value: number | number[]) => {
    const changedValue = { ...window, fontSize: value as number };
    useLocalStoarge("post", "windowOption", JSON.stringify(changedValue));
    setWindow(changedValue);
  };

  const handleBackgroundColor = ({ hex }: { hex: string }) => {
    const changedValue = { ...window, background: hex };
    useLocalStoarge("post", "windowOption", JSON.stringify(changedValue));
    setWindow(changedValue);
  };
  const handleColor = ({ hex }: { hex: string }) => {
    const changedValue = { ...window, color: hex };
    useLocalStoarge("post", "windowOption", JSON.stringify(changedValue));
    setWindow(changedValue);
  };

  return (
    <section id={`main`} className="p-12">
      <SettingButton open={FontSizeModal.open} />
      {window.fontSize}
      <Slider
        value={window.fontSize}
        aria-label="Default"
        valueLabelDisplay="auto"
        onChange={handleFontSizeChange}
        min={1}
        max={128}
      />
      textColor
      <SketchPicker color={window.color} onChangeComplete={handleColor} />
      background
      <SketchPicker
        color={window.background}
        onChangeComplete={handleBackgroundColor}
      />
      <FontSizeModal.window className="mx-auto mt-24 w-[80%] h-[40rem] bg-red-100 rounded-xl">
        <div>
          <p>글자 크기를 선택해주세요</p>
          <div>
            <button onClick={FontSizeModal.close}>OK</button>
          </div>
        </div>
      </FontSizeModal.window>
    </section>
  );
};

export default Main;
