import React from "react";
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

    overrall: {
      width: "40vh",
    },
    chips: {},
  })
);

type Props = {
  name: string;
  icon: string;
  tag1: string;
  tag2: string;
};

const UserBlock: React.FC<Props> = ({ name, icon, tag1, tag2 }) => {
  const classes = useStyles();
  return (
    <Button
      onClick={() => alert("ユーザを押した")}
      className={classes.overrall}
    >
      <Container maxWidth="sm">
        <Avatar alt={name} src={icon} className={classes.avatar} />
        <Typography variant="h5" className={classes.typography}>
          {name}
        </Typography>
        <Chip
          variant="outlined"
          size="small"
          label={tag1}
          className={classes.tag1}
        />
        <Chip
          variant="outlined"
          size="small"
          label={tag2}
          className={classes.tag2}
        />
      </Container>
    </Button>
  );
};

export default UserBlock;
