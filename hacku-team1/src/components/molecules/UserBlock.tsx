import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    avatar: {
      width: "100px",
      height: "100px",
      margin: "1em auto"
    },
    typography: {},
    tags: {
      margin: "0 auto",
    },
    tag: {
      margin: "1em",
    },
  }),
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
    <>
      <Button onClick={() => alert("ユーザを押した")}>
        <Container maxWidth="sm">
          <Avatar alt={name} src={icon} className={classes.avatar} />
          <Typography variant="h5" className={classes.typography}>
            {name}
          </Typography>
          <Chip
            variant="outlined"
            size="small"
            label={tag1}
            className={classes.tag}
          />
          <Chip
            variant="outlined"
            size="small"
            label={tag2}
            className={classes.tag}
          />
        </Container>
      </Button>
    </>
  );
};

export default UserBlock;
