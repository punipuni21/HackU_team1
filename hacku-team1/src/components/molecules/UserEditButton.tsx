import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import UserEditDialog from "../molecules/UserEditDialog";
import IconButton from "@material-ui/core/IconButton";
import SettingsIcon from "@material-ui/icons/Settings";

const useStyles = makeStyles((theme) => ({}));

type Props = {
  myUid: any;
  otherUid: any;
  reloadDB: VoidFunction;
};

const UserEditButton: React.FC<Props> = ({ myUid, otherUid, reloadDB }) => {
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
      <IconButton aria-label="settings" onClick={handleOpen}>
        <SettingsIcon fontSize="large" />
      </IconButton>
      <UserEditDialog
        myUid={myUid}
        otherUid={otherUid}
        isOpen={open}
        doClose={() => handleClose()}
        reloadDB={reloadDB}
      />
    </>
  );
};

export default UserEditButton;
