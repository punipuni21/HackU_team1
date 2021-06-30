import React from "react";
import Typography from "@material-ui/core/Typography";

type Props = {
  className: string;
};

const AppName: React.FC<Props> = ({ className }) => {
  return (
    <Typography className={className} variant="h4" noWrap>
      しろ-せん
    </Typography>
  );
};

export default AppName;
