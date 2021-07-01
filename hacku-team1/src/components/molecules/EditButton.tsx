import React from "react";
import { useState } from "react";
import { withStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { Box, IconButton, Tooltip} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import EditDialog from "./EditDialog";

interface Props {
  style: string;
  contents: string[];
  editContents: any;
  updateDB: VoidFunction;
}

const LightTooltip = withStyles((theme: Theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}))(Tooltip);

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
