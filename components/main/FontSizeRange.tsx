import { FontSizeRangeProps } from "@/types/main/window.interface";
import { handleFontSizeChange } from "@/util";
import { Slider } from "@mui/material";
import React from "react";

export default function FontSizeRange({
  window,
}: {
  window: FontSizeRangeProps;
}) {
  return (
    <>
      <span className="text-6xl mb-4 block">글자 크기</span>
      <Slider
        value={window.state.fontSize}
        aria-label="Default"
        valueLabelDisplay="auto"
        onChange={(_, value) => {
          handleFontSizeChange(_, value, window.state, window.setState);
        }}
        min={1}
        max={256}
      />
      <div className="mb-6" />
    </>
  );
}
