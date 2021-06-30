import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";
import LocalHospitalRoundedIcon from "@material-ui/icons/LocalHospitalRounded";

import RecommendAddDialog from "../molecules/RecommendAddDialog";

const useStyles = makeStyles((theme) => ({
  addbutton: {
    marginTop: "5px",
  },
}));

type Props = {
  myUid: any;
  otherUid: any;
};

const RecommendAddButton: React.FC<Props> = ({ myUid, otherUid }) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton className={classes.addbutton} onClick={handleOpen}>
        <LocalHospitalRoundedIcon
          style={{
            maxWidth: "60px",
            maxHeight: "60px",
            minWidth: "60px",
            minHeight: "60px",
          }}
        />
      </IconButton>
      <RecommendAddDialog
        myUid={myUid}
        otherUid={otherUid}
        isOpen={open}
        doClose={() => handleClose()}
      />
    </>
  );
};

export default RecommendAddButton;
