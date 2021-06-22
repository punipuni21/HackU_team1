import React from "react";

type Props = {
  text: string;
  classname: string;
};

const TextLabel: React.FC<Props> = ({ text, classname }) => {
  return <h1 className={classname}>{text}</h1>;
};

export default TextLabel;
