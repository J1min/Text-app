import { SettingButtonProps } from "@/types/components/index.interface";
import React from "react";

export default function SettingButton({ open }: SettingButtonProps) {
  return (
    <button
      className="fixed bottom-10 right-10 p-12 bg-white border-2 border-black text-6xl leading-[0] rounded-full cursor-pointer"
      onClick={open}
    >
      생성
    </button>
  );
}
