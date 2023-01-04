import React from "react";
import type { NextPage } from "next";
import useModal from "@/hooks/useModal";

const Main: NextPage = () => {
  const 엄준식 = useModal();

  return (
    <section id={`main`}>
      <button onClick={엄준식.open}>open modal</button>
      <엄준식.Modal>
        <p>삭제하시겠습니까?</p>
        <div>
          <button onClick={엄준식.close}>OK</button>
          <button onClick={엄준식.close}>Cancle</button>
        </div>
      </엄준식.Modal>
    </section>
  );
};

export default Main;
