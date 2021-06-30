import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Chip, Container, Fab, IconButton } from "@material-ui/core";
import LocalHospitalRoundedIcon from "@material-ui/icons/LocalHospitalRounded";

import RecommendAddDialog from "../molecules/RecommendAddDialog";

import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) => ({
  addbutton: {
    marginTop: "5px",
  },
  container: {
    width: "fit-content",
    marginTop: "1rem",
  },
}));

type Props = {
  myUid: any;
  otherUid: any;
  reloadDB: VoidFunction;
};

const RecommendAddButton: React.FC<Props> = ({ myUid, otherUid, reloadDB }) => {
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
      <Container className={classes.container}>
        <Chip
          size="medium"
          label="おすすめを追加する"
          onClick={handleOpen}
          onDelete={handleOpen}
          deleteIcon={<AddIcon />}
          color="primary"
        />
      </Container>
      <RecommendAddDialog
        myUid={myUid}
        otherUid={otherUid}
        isOpen={open}
        doClose={() => handleClose()}
        reloadDB={reloadDB}
      />
    </>
  );
};

export default RecommendAddButton;
