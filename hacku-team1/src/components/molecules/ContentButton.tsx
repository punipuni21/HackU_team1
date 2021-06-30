import React, { useState } from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";

import CompleteDialog from "../molecules/CompleteDialog";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    gridList: {
      flexWrap: "nowrap",
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: "translateZ(0)",
    },
    gridListTile: {
      // width: "100%",
      minWidth: "180px",
      height: "100% !important",
      maxHeight: "400px",
    },
    avatar: {
      width: "160px",
      height: "120px",
      margin: "0 auto",
    },
    typography: {
      margin: "1rem 0",
    },
    overall: {
      width: "100%",
      height: "100%",
    },
  })
);

type Props = {
  content: any;
};

const ContentButton: React.FC<Props> = ({ content }) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <GridListTile
      key={content.src + content.text}
      className={classes.gridListTile}
    >
      <Button
        //   onClick={() => alert("おすすめを押した")}
        onClick={handleOpen}
        className={classes.overall}
      >
        <Container style={{ padding: 0 }}>
          <Avatar
            variant="square"
            alt={content.text}
            src={content.src}
            className={classes.avatar}
          />
          <Typography variant="body1" className={classes.typography}>
            {content.text}
          </Typography>
        </Container>
      </Button>
      <CompleteDialog
        title={"「" + content.text + "」を達成しました！"}
        refURL={content.refURL}
        img={content.src}
        msg={content.doneContent}
        isOpen={open}
        doClose={() => handleClose()}
      ></CompleteDialog>
    </GridListTile>
  );
};

export default ContentButton;
