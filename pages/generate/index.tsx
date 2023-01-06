import { WindowType } from "@/types/main/window.interface";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

export default function Generate() {
  const router = useRouter();
  const query = router.query as unknown as WindowType;

  type WrapperProps = Omit<WindowType, "content">;
  const GenerateWrapper = styled.div<{ query: WrapperProps }>`
    background-color: #${query.background};
    color: #${query.color};
    font-size: ${query.fontSize}px;
    height: 100vh;
    padding: 4rem;
  `;

  console.log(router.query);
  return <GenerateWrapper query={query}>{query.content}</GenerateWrapper>;
}
