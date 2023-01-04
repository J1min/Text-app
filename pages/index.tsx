import React from "react";
import type { NextPage } from "next";
import useModal from "@/hooks/useModal";
import Image from "next/image";

const Main: NextPage = () => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const FontSizeModal = useModal();

  return (
    <section id={`main`}>
      <button
        className="fixed bottom-10 right-10 bg-white border-2 border-black p-6 text-6xl leading-[0] rounded-full"
        onClick={FontSizeModal.open}
      >
        <Image
          src="https://cdn-icons-png.flaticon.com/512/97/97777.png"
          alt="설정"
          width={40}
          height={40}
        />
      </button>

      <FontSizeModal.Modal className="mx-auto mt-24 w-[80%] h-[40rem] bg-red-100 rounded-xl">
        <div>
          <p>삭제하시겠습니까?</p>
          <input type="range" />
          <div>
            <button onClick={FontSizeModal.close}>OK</button>
            <button onClick={FontSizeModal.close}>Cancle</button>
          </div>
        </div>
      </FontSizeModal.Modal>
    </section>
  );
};

export default Main;
