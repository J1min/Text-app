import { WindowType } from "@/types/window.interface";
import { FontSizeRangeProps } from "@/types/window.interface";
import { handleContent } from "@/util";
import React from "react";
import styled from "styled-components";

const StyledTextArea = styled.textarea<Omit<WindowType, "content">>`
  color: #${(props) => props.color};
  background-color: #${(props) => props.background};
  font-size: ${(props) => props.fontSize}px;
`;

export default function Content({ window }: { window: FontSizeRangeProps }) {
  return (
    <>
      <span className="text-6xl block mb-4">내용 미리보기</span>
      <StyledTextArea
        className={
          "block w-full resize-none p-8 border-2 border-black rounded-lg"
        }
        fontSize={window.state.fontSize}
        color={window.state.color}
        background={window.state.background}
        onChange={(event) => {
          handleContent(event, window.state, window.setState);
        }}
        value={window.state.content}
      />
    </>
  );
}
