import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Fab } from '@material-ui/core';

import AddIcon from '@material-ui/icons/Add';
import EditDialog from './EditDialog';
import { Chip } from '@material-ui/core';

interface Props {
  myUid: string | null;
  otherUid: string | null;
  statusDataList: string[];

  editContents: any;
  updateDB: VoidFunction;
}

const useStyles = makeStyles((theme) => ({
  editButton: {
    marginTop: '5px',
  },
  chip: {
    margin: theme.spacing(1),
  },
}));

const Status: React.FC<Props> = ({ myUid, otherUid, statusDataList, editContents, updateDB }) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {myUid === otherUid && statusDataList.length === 0 ? (
        <Box mb={3}>
          <Fab variant="extended" color="primary" onClick={handleOpen}>
            あなたが初心者であるものを設定しましょう！
            <AddIcon />
          </Fab>
        </Box>
      ) : (
        statusDataList.map((status, index) => (
          <Chip
            variant="default"
            className={classes.chip}
            label={status}
            color="primary"
            key={status + index + 'chip'}
          />
        ))
      )}

      <EditDialog
        title={'何のしろうと?'}
        contents={statusDataList}
        editContents={editContents}
        isOpen={open}
        doClose={() => handleClose()}
        updateDB={updateDB}
      />
    </div>
  );
};

export default Status;
