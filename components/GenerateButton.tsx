import { WindowType } from "@/types/window.interface";
import { useRouter } from "next/router";
import React from "react";

export default function GenerateButton({ window }: { window: WindowType }) {
  const router = useRouter();
  const moveGenerate = ({
    content,
    background,
    color,
    fontSize,
  }: WindowType) => {
    const url = `/generate?fontSize=${fontSize}&content=${content}&color=${color}&background=${background}`;
    router.push(url);
  };

  return (
    <button
      className="transition mt-12 px-8 py-4 bg-white border-2 border-black text-6xl rounded-lg cursor-pointer hover:bg-slate-700 hover:text-white"
      onClick={() => moveGenerate(window)}
    >
      생성
    </button>
  );
}
