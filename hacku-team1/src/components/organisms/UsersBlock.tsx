import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import UserBlock from "../molecules/UserBlock";

const useStyles = makeStyles({
  divider: {
    marginTop: "20px",
    marginBottom: "20px",
  },
  h2: {
    textAlign: "left",
    marginLeft: "20px",
  },
});

type Props = {
  Users: any[];
};

const UsersBlock: React.FC<Props> = ({ Users }) => {
  const classes = useStyles();

  return (
    <div>
      <Grid item xs={12}>
        <Grid container justify="center" >
          {Users.map((usr) => (
            <UserBlock
              name={usr.username}
              icon={usr.setIcon}
              tag1={usr.setTag1}
              tag2={usr.setTag2}
            />
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default UsersBlock;