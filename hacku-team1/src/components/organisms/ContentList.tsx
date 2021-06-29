import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      position: "relative",
      display: "flex",
      height: "15em",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "auto",
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      flexWrap: "wrap",
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: "translateZ(0)",
    },
    title: {
      color: "white",
      fontWeight: "bold",
    },
    titleBar: {
      background:
        "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
    },
    image: {
      width: "auto",
      height: "100%",
    },
  })
);

type Props = {
  classname: string;
  contents: any[];
};

const ContentList: React.FC<Props> = ({ classname, contents }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={2} spacing={5}>
        {contents.map((content) => (
          <GridListTile key={content.src + content.text}>
            <img
              className={classes.image}
              src={content.src}
              alt={content.alt}
            />
            <GridListTileBar
              title={content.text}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default ContentList;
