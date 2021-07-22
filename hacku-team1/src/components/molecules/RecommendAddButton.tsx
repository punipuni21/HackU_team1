import React from 'react';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Fab } from '@material-ui/core';

import RecommendAddDialog from '../molecules/RecommendAddDialog';

import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  addbutton: {
    marginTop: '5px',
  },
  container: {
    width: 'fit-content',
    marginTop: '1rem',
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
        <Fab variant="extended" color="primary" onClick={handleOpen}>
          おすすめを追加する
          <AddIcon />
        </Fab>
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
