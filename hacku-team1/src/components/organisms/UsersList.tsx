import React from 'react';
import { useHistory } from 'react-router-dom';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { Avatar, Button, Container, Typography, GridList, GridListTile } from '@material-ui/core';

import DecoratedHead from '../molecules/DecoratedHead';
import { UserData } from '../pages/TopPage';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    gridList: {
      flexWrap: 'nowrap',
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',
    },
    gridListTile: {
      width: '100%',
      minWidth: '180px',
      height: '100% !important',
      maxHeight: '400px',
    },
    avatar: {
      width: 'fit-content',
      height: 'fit-content',
      margin: '0 auto',
    },
    typography: {
      margin: '1rem 0',
      textTransform: 'none',
    },
    overall: {
      width: '100%',
      height: '100%',
    },
  })
);

type Props = {
  uid: string | null;
  setOtherUid: any;
  classname?: string;
  colSize: number;
  title: string;
  icon: any;
  color: string;
  contents: UserData[] | undefined;
};

const RecommendedUsersList: React.FC<Props> = ({
  uid,
  setOtherUid,
  classname,
  colSize,
  title,
  icon,
  color,
  contents,
}) => {
  const classes = useStyles();
  const history = useHistory();

  const onClick = (userID: string) => {
    if (uid) {
      setOtherUid(userID);
      history.push('otheruserpage');
    } else {
      alert('サインインしてください');
    }
  };

  if (contents !== undefined)
    return (
      <div className={classname}>
        <DecoratedHead color={color} icon={icon} text={title} />
        <GridList className={classes.gridList} cols={colSize}>
          {contents.map((content) => (
            <GridListTile key={content.userName + content.iconURL} className={classes.gridListTile}>
              <Button onClick={() => onClick(content.userID)} className={classes.overall}>
                <Container style={{ padding: 0 }}>
                  <Avatar alt={content.userName} src={content.iconURL} className={classes.avatar} />
                  <Typography variant="body1" className={classes.typography}>
                    {content.userName}
                  </Typography>
                </Container>
              </Button>
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  else return <div></div>;
};

export default RecommendedUsersList;
