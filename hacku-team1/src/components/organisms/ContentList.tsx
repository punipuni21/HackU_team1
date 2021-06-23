import React from "react";
import Image from "../atoms/Image";
import TextLabel from "../atoms/TextLabel";
import Content from "../molecules/Content";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
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
              classname={content.classname}
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
