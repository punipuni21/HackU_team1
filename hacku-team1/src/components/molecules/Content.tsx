import React from "react";
import Image from "../atoms/Image";
import TextLabel from "../atoms/TextLabel";
import { makeStyles } from "@material-ui/core/styles";

type Props = {
  src: string;
  alt: string;
  classname: string;
  text: string;
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  image: {
    width: "200px",
    height: "200px",
  },
  content: {
    textAlign: "center",
  }
}));

const Content: React.FC<Props> = ({ src, alt, classname, text }) => {
  const classes = useStyles();
  return (
    <div className={classes.content}>
      <Image src={src} alt={alt} classname={classes.image}></Image>
      <TextLabel classname={classname} text={text}></TextLabel>
    </div>
  );
};

export default Content;
