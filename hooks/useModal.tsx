import { ModalProps } from "@/types/hooks/useModal.interface";
import React from "react";
import ReactModal from "react-modal";

const getModal = (isOpen: boolean) => {
  return isOpen
    ? ({ children, className }: ModalProps) => (
        <ReactModal className={className} isOpen={isOpen}>
          {children}
        </ReactModal>
      )
    : () => null;
};

export default function useModal() {
  const [isOpen, setIsOpen] = React.useState(false);

  const open = React.useCallback(() => {
    setIsOpen(() => true);
  }, []);
  const close = React.useCallback(() => {
    setIsOpen(() => false);
  }, []);

  return {
    window: getModal(isOpen),
    open,
    close,
    isOpen,
  };
}
