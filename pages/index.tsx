import React from "react";
import type { NextPage } from "next";
import { useRecoilState } from "recoil";
import { textState } from "../context";

const Main: NextPage = () => {
  const [text] = useRecoilState(textState);
  return <section id={`main`}>I love {text} 1.2.9</section>;
};

export default Main;
