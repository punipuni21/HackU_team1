import React from "react";
import Content from "../molecules/Content";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  content: {
    width: "300px",
    textAlign: "center",
    position: "inherit",
    padding: "0 10px",
  },
}));

type Props = {
  contents: any[];
};

const ContentList: React.FC<Props> = ({ contents }) => {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          {contents.map((content) => (
            <Content
              classname={classes.content}
              src={content.src}
              alt={content.alt}
              text={content.text}
            ></Content>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ContentList;
