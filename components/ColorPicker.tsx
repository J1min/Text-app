import { FontSizeRangeProps } from "@/types/window.interface";
import { handleBackgroundColor, handleColor } from "@/util";
import React from "react";
import { SketchPicker } from "react-color";

export default function ColorPickers({
  window,
}: {
  window: FontSizeRangeProps;
}) {
  return (
    <>
      <div>
        <span className="text-6xl mb-4 block">글자 색상</span>
        <SketchPicker
          color={window.state.color}
          onChangeComplete={({ hex }) => {
            handleColor(hex, window.state, window.setState);
          }}
        />
      </div>
      <div>
        <span className="text-6xl mb-4 block">배경 색상</span>
        <SketchPicker
          color={window.state.background}
          onChangeComplete={({ hex }) => {
            handleBackgroundColor(hex, window.state, window.setState);
          }}
        />
      </div>
    </>
  );
}
