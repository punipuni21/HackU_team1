import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { GridList, GridListTile, GridListTileBar, IconButton, Typography } from '@material-ui/core';
import CompleteDialog from './CompleteDialog';
import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap';
type Props = {
  completeDataList: Data[];
};

type Data = {
  content: string;
  refURL: string;
  imageURL: string;
  doneContent: string;
};

const useStyles = makeStyles((theme) => ({
  h2: {
    textAlign: 'left',
    marginTop: '20px',
    marginRight: '0px',
    marginBottom: '10px',
    marginLeft: '20px',
  },
  buttons: {
    // marginLeft: "40px",
  },
  gridList: {
    // maxWidth: 600,
    // height: 450,
    // // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    // transform: "translateZ(0)",
  },
  titleBar: {
    // background:
    //   "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
    //   "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
    // backgroundColor: theme.palette.secondary.dark,
    // opacity: "0.6",
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  gridtile: {
    maxWidth: '300px',
    maxHeight: '300px',
    '& > *': {
      borderRadius: '4px',
      boxShadow:
        '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)',
    },

    [theme.breakpoints.down('sm')]: {
      maxHeight: '200px',
    },
  },
}));

const Complete: React.FC<Props> = ({ completeDataList }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [opencontent, setOpencontent] = useState('');

  const handleOpen = (contentname: string) => {
    setOpen(true);
    setOpencontent(contentname);
  };
  const handleClose = () => {
    setOpen(false);
    setOpencontent('');
  };
  return (
    <GridList cellHeight="auto" spacing={2} className={classes.gridList}>
      {completeDataList.map((data: Data) => (
        <GridListTile key={data.content + data.imageURL} className={classes.gridtile}>
          <img src={data.imageURL} alt={data.content} />
          <GridListTileBar
            title={<Typography variant="subtitle1">{data.content}</Typography>}
            className={classes.titleBar}
            actionIcon={
              <IconButton className={classes.icon} onClick={() => handleOpen(data.content)}>
                <ZoomOutMapIcon />
              </IconButton>
            }
          />
          <CompleteDialog
            title={'「' + data.content + '」を達成しました！'}
            refURL={data.refURL}
            img={data.imageURL}
            msg={data.doneContent}
            isOpen={opencontent === data.content && open}
            doClose={() => handleClose()}
          />
        </GridListTile>
      ))}
    </GridList>
  );
};

export default Complete;
