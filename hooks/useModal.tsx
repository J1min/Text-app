import { ModalProps } from "@/types/useModal.interface";
import React from "react";
import ReactModal from "react-modal";

export default function useModal() {
  const [isOpen, setIsOpen] = React.useState(false);

  const open = React.useCallback(() => {
    setIsOpen(() => true);
  }, []);
  const close = React.useCallback(() => {
    setIsOpen(() => false);
  }, []);

  return {
    Modal: isOpen
      ? ({ children, className }: ModalProps) => (
          <ReactModal className={className} isOpen={isOpen}>{children}</ReactModal>
        )
      : () => null,
    open,
    close,
    isOpen,
  };
}
