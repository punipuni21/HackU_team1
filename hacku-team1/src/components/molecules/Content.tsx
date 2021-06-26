import React from "react";
import Image from "../atoms/Image";
import TextLabel from "../atoms/TextLabel";
import { makeStyles } from "@material-ui/core/styles";
import { ClassTwoTone } from "@material-ui/icons";

type Props = {
  src: string;
  alt: string;
  classname: string;
  text: string;
};

const useStyles = makeStyles((theme) => ({
  image: {
    width: "50%",
    height: "50%",
  },
  content: {
    // position: "static",
    width: "25%",
    textAlign: "center",
  },
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
