import React from "react";
import { useHistory } from "react-router-dom";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    avatar: {
      width: "fit-content",
      height: "fit-content",
      margin: "1em auto",
    },
    typography: {
      margin: "1rem 0",
    },

    tag1: { marginRight: "0.25rem" },
    tag2: { marginLeft: "0.25rem" },

    overall: {
      width: "100%",
      height: "100%",
    },
    chips: {},
  })
);

type Props = {
  name: string;
  icon: string;
  tag1: string | null;
  tag2: string | null;
  userid: string;
  setOtherUid: any;
};

const UserBlock: React.FC<Props> = ({
  name,
  icon,
  tag1,
  tag2,
  userid,
  setOtherUid,
}) => {
  const classes = useStyles();
  const history = useHistory();

  const handleClick = () => {
    setOtherUid(userid);
    history.push("/otheruserpage");
  };

  return (
    <Button onClick={handleClick} className={classes.overall}>
      <Container maxWidth="sm">
        <Avatar alt={name} src={icon} className={classes.avatar} />
        <Typography variant="h5" className={classes.typography}>
          {name}
        </Typography>
        {tag1 !== null ? (
          <Chip
            variant="outlined"
            size="small"
            label={tag1}
            className={classes.tag1}
          />
        ) : (
          <></>
        )}
        {tag2 !== null ? (
          <Chip
            variant="outlined"
            size="small"
            label={tag2}
            className={classes.tag2}
          />
        ) : (
          <></>
        )}
      </Container>
    </Button>
  );
};

export default UserBlock;
