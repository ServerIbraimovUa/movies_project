import React, { FC, ReactNode } from "react";

type Props = {
  cildren: ReactNode;
};

const Modal: FC<Props> = ({ cildren }) => {
  return <div>{cildren}</div>;
};

export default Modal;
