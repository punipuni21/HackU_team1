import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import UserBlock from "../molecules/UserBlock";

const useStyles = makeStyles({});

type Props = {
  Users: {
    [key: string]: {
      user: { displayName: string; iconURL: string };
      status: { useID: string; content: string }[];
    };
  };
};

const UsersBlock: React.FC<Props> = ({ Users }) => {
  const classes = useStyles();

  const returnUserBlock = () => {
    let elements: any = [];

    Users &&
      Object.keys(Users).forEach((value) => {
        elements.push(
          <UserBlock
            name={Users[value].user.displayName}
            icon={Users[value].user.iconURL}
            tag1={
              Users[value].status[0] ? Users[value].status[0].content : "null"
            }
            tag2={
              Users[value].status[1] ? Users[value].status[1].content : "null"
            }
          />
        );
      });

    return elements;
  };
  return (
    <div>
      <Grid item xs={12}>
        <Grid container justify="center">
          {returnUserBlock()}
        </Grid>
      </Grid>
    </div>
  );
};

export default UsersBlock;
