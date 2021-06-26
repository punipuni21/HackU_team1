import React from "react";
import Content from "../molecules/Content";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  grid: {
    position: "static",
  },
  content: {
    width: "100%",
    textAlign: "center",
    position: "absolute",
    padding: "0",
    left: "-1.95%",
    right: "1.95%",
    top: "1.95%",
    bottom: "-1.95%",
    border: "1px solid #3C64B1",
  },
}));

type Props = {
  classname: string,
  contents: any[];
};

const ContentList: React.FC<Props> = ({ classname, contents }) => {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  return (
    <Grid container className={classes.grid}>
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
