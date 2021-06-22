import React from "react";
import Button2 from "@material-ui/core/Button";

interface Props {
  text: string;
  onClick: VoidFunction;
}

// カード一枚のコンポーネント Atoms
function Button(props: Props) {
  return (
    <Button2
      variant="contained"
      color="primary"
      className="button"
      onClick={props.onClick}
    >
      {props.text}
    </Button2>
  );
}

export default Button;
