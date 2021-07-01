import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import { Breakpoint } from "@material-ui/core/styles/createBreakpoints";

import UserBlock from "../molecules/UserBlock";

const useStyles = makeStyles({
  gridList: {
    flexWrap: "wrap",
    transform: "translateZ(0)",
  },
  gridListTile: {
    width: "100%",
    minWidth: "180px",
    height: "100% !important",
    maxHeight: "400px",
  },
});

type Props = {
  width: Breakpoint;
  Users: {
    [key: string]: {
      user: { displayName: string; iconURL: string };
      userid: string;
      status: { useID: string; content: string }[];
    };
  };
  setOtherUid: any;
};

const UsersBlock: React.FC<Props> = ({ width, Users, setOtherUid }) => {
  const classes = useStyles();

  const getGridListCols = () => {
    if (isWidthUp("xl", width)) return 5;
    if (isWidthUp("lg", width)) return 4;
    if (isWidthUp("md", width)) return 3;
    if (isWidthUp("sm", width)) return 2;
    return 1;
  };

  const returnUserBlock = () => {
    let elements: any = [];

    Users &&
      Object.keys(Users).forEach((value) => {
        elements.push(
          <GridListTile
            key={Users[value].user.displayName + value}
            cols={1}
            rows={1}
            className={classes.gridListTile}
          >
            <UserBlock
              name={Users[value].user.displayName}
              icon={Users[value].user.iconURL}
              tag1={
                Users[value].status[0] ? Users[value].status[0].content : "null"
              }
              tag2={
                Users[value].status[1] ? Users[value].status[1].content : "null"
              }
              userid={Users[value].userid}
              setOtherUid={setOtherUid}
            />
          </GridListTile>
        );
      });

    return elements;
  };
  return (
    <GridList cols={getGridListCols()} className={classes.gridList}>
      {returnUserBlock()}
    </GridList>
  );
};

export default withWidth()(UsersBlock);
