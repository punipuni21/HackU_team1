import React from "react";
import { useState } from "react";
import { Box, IconButton } from "@material-ui/core";

import EditDialog from "./EditDialog";
import LightTooltip from "../atoms/LightTooltip";

import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
interface Props {
  style: string;
  contents: string[];
  editContents: any;
  updateDB: VoidFunction;
  open: boolean;
  handleClose: VoidFunction;
  handleOpen: VoidFunction;
}

const EditButton: React.FC<Props> = (props) => {
  // const [open, setOpen] = useState(false);
  // const handleOpen = () => {
  //   setOpen(true);
  // };
  // const handleClose = () => {
  //   setOpen(false);
  // };

  return (
    <>
      <Box>
        <LightTooltip title="追加・削除" placement="right">
          <IconButton
            className={props.style}
            onClick={props.handleOpen}
            color="primary"
          >
            <MoreHorizIcon />
          </IconButton>
        </LightTooltip>
      </Box>
      <EditDialog
        title={"何の初心者?"}
        contents={props.contents}
        editContents={props.editContents}
        isOpen={props.open}
        doClose={() => props.handleClose()}
        updateDB={props.updateDB}
      />
    </>
  );
};

export default EditButton;
