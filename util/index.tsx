import useLocalStoarge from "@/hooks/useLocalStoarge";
import React from "react";
import { WindowType } from "@/types/window.interface";

const handleFontSizeChange = (
  _: Event,
  value: number | number[],
  window: WindowType,
  setWindow: React.Dispatch<React.SetStateAction<WindowType>>,
) => {
  const changedValue = { ...window, fontSize: value as number };
  useLocalStoarge("post", "windowOption", JSON.stringify(changedValue));
  setWindow(changedValue);
};

const handleBackgroundColor = (
  hex: string,
  window: WindowType,
  setWindow: React.Dispatch<React.SetStateAction<WindowType>>,
) => {
  const changedValue = { ...window, background: hex.substring(1) };
  useLocalStoarge("post", "windowOption", JSON.stringify(changedValue));
  setWindow(changedValue);
};

const handleColor = (
  hex: string,
  window: WindowType,
  setWindow: React.Dispatch<React.SetStateAction<WindowType>>,
) => {
  const changedValue = { ...window, color: hex.substring(1) };
  useLocalStoarge("post", "windowOption", JSON.stringify(changedValue));
  setWindow(changedValue);
};

const handleContent = (
  event: React.ChangeEvent<HTMLTextAreaElement>,
  window: WindowType,
  setWindow: React.Dispatch<React.SetStateAction<WindowType>>,
) => {
  const changedValue = { ...window, content: event.target.value };
  useLocalStoarge("post", "windowOption", JSON.stringify(changedValue));
  setWindow(changedValue);
};

export {
  handleFontSizeChange,
  handleBackgroundColor,
  handleColor,
  handleContent,
};
