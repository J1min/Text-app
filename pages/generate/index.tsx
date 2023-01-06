import { WindowType } from "@/types/main/window.interface";
import Head from "next/head";
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

  return (
    <>
      <Head>
        <title>{query.content}</title>
      </Head>
      <GenerateWrapper query={query}>{query.content}</GenerateWrapper>;
    </>
  );
}
