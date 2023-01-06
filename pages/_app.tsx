import React from "react";
import type { AppProps } from "next/app";
import { theme } from "../styles/theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/globalStyle";
import { UserStyle } from "../styles/userStyle";
import { RecoilRoot } from "recoil";
import "@/styles/tailwind.css";
import ReactModal from "react-modal";

export default function App({ Component, pageProps }: AppProps) {
  ReactModal.setAppElement('#app');
  
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <UserStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </RecoilRoot>
  );
}
