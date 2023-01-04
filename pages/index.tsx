import React from "react";
import type { NextPage } from "next";
import useModal from "../hooks/useModal";
import ReactModal from "react-modal";

const Main: NextPage = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <section id={`main`}>
      <ReactModal isOpen={isOpen}>
        <div>안녕하세요</div>
        <button
          onClick={() => {
            setIsOpen(false);
          }}
        >
          끄기
        </button>
      </ReactModal>
      <button
        onClick={() => {
          setIsOpen(true);
        }}
      >
        열기
      </button>
    </section>
  );
};

export default Main;
