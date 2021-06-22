import React from "react";

type Props = {
  name: string;
  onClick: VoidFunction;
  classname: string;
};

const Button: React.FC<Props> = ({ name, onClick, classname }) => {
  return (
    <button className={classname} onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;
