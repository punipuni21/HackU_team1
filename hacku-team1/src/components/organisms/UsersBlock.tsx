import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import UserBlock from "../molecules/UserBlock";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles({});

type Props = {
  Users: {
    [key: string]: {
      user: { displayName: string; iconURL: string };
      userid: string;
      status: { useID: string; content: string }[];
    };
  };
  setOtherUid: any;
};

const UsersBlock: React.FC<Props> = ({ Users, setOtherUid }) => {
  const classes = useStyles();

  const returnUserBlock = () => {
    let elements: any = [];

    Users &&
      Object.keys(Users).forEach((value) => {
        elements.push(
          <Grid item key={Users[value].user.displayName + value}>
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
          </Grid>
        );
      });

    return elements;
  };
  return (
    <Container>
      <Grid container justify="flex-start" spacing={2}>
        {returnUserBlock()}
      </Grid>
    </Container>
  );
};

export default UsersBlock;
