import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

import DecoratedHead from "../molecules/DecoratedHead";
import ContentButton from "../molecules/ContentButton";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    gridList: {
      flexWrap: "nowrap",
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: "translateZ(0)",
    },
    gridListTile: {
      width: "100%",
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
  classname?: string;
  colSize: number;
  title: string;
  icon: any;
  color: string;
  contents: any[];
};

const ContentList: React.FC<Props> = ({
  classname,
  colSize,
  title,
  icon,
  color,
  contents,
}) => {
  const classes = useStyles();

  return (
    <div className={classname}>
      <DecoratedHead color={color} icon={icon} text={title} />
      <GridList className={classes.gridList} cols={colSize}>
        {contents.map((content) => (
          <ContentButton content={content} />
        ))}
      </GridList>
    </div>
  );
};

export default ContentList;
