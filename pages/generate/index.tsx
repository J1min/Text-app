import { WindowType } from "@/types/window.interface";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

export default function Generate() {
  const router = useRouter();
  const query = router.query as unknown as WindowType;

  const GenerateWrapper = styled.div<{ query: Omit<WindowType, "content"> }>`
    display: grid;
    background-color: #${query.background.substring(0, 6)};
    color: #${query.color.substring(0, 6)};
    font-size: ${query.fontSize}px;
    min-height: 100vh;
    height: auto;
    padding: 4rem;
    word-break: break-all;
  `;

  return (
    <>
      <Head>
        <title>{query.content}</title>
      </Head>
      <GenerateWrapper query={query}>{query.content}</GenerateWrapper>
    </>
  );
}
