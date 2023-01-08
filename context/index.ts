import { atom } from "recoil";
import { WindowType } from "@/types/window.interface";

export const windowState = atom<WindowType>({
  key: "windowState",
  default: {
    fontSize: 16,
    background: "#ffffff",
    color: "#000000",
    content: "",
  },
});
