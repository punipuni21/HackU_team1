import React from "react";
import Button from "@material-ui/core/Button";

type Props = {
  className: string;
  label: string;
  onClick: VoidFunction;
};

const OutlineButton: React.FC<Props> = ({ className, label, onClick }) => {
  return (
    <Button variant="outlined" className={className} onClick={onClick}>
      {label}
    </Button>
  );
};

export default OutlineButton;
