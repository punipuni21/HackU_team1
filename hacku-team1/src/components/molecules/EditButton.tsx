import React from "react";
import { useState } from "react";
import { Box, IconButton } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import EditDialog from "./EditDialog";
import LightTooltip from "../atoms/LightTooltip"

interface Props {
  style: string;
  contents: string[];
  editContents: any;
  updateDB: VoidFunction;
}

const EditButton: React.FC<Props> = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box>
        <LightTooltip title="追加・削除" placement="right">
          <IconButton className={props.style} onClick={handleOpen}>
            <ExpandMoreIcon />
          </IconButton>
        </LightTooltip>
      </Box>
      <EditDialog
        title={"何の初心者?"}
        contents={props.contents}
        editContents={props.editContents}
        isOpen={open}
        doClose={() => handleClose()}
        updateDB={props.updateDB}
      />
    </>
  );
};

export default EditButton;
