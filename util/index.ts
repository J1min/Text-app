import React from "react";

export const onChangeAction = (
  event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  setState: React.Dispatch<React.SetStateAction<any>>
) => {
  setState(event.target.value);
};

