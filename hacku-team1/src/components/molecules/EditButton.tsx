import React from 'react';
import { Box, IconButton } from '@material-ui/core';

import EditDialog from './EditDialog';
import LightTooltip from '../atoms/LightTooltip';

import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
interface Props {
  style: string;
  contents: string[];
  editContents: any;
  updateDB: VoidFunction;
  open: boolean;
  handleClose: VoidFunction;
  handleOpen: VoidFunction;
}

const EditButton: React.FC<Props> = ({
  style,
  contents,
  editContents,
  updateDB,
  open,
  handleClose,
  handleOpen,
}) => {
  return (
    <>
      <Box>
        <LightTooltip title="追加・削除" placement="right">
          <IconButton className={style} onClick={handleOpen} color="primary">
            <MoreHorizIcon />
          </IconButton>
        </LightTooltip>
      </Box>
      <EditDialog
        title={'何のしろうと?'}
        contents={contents}
        editContents={editContents}
        isOpen={open}
        doClose={() => handleClose()}
        updateDB={updateDB}
      />
    </>
  );
};

export default EditButton;
