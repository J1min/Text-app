import React from "react";
import ReactModal from "react-modal";

export default function useModal(isOpen: boolean) {
  return (
    <ReactModal isOpen={isOpen}>
      <></>
    </ReactModal>
  );
}
