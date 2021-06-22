import React from "react";
import Image from "../atoms/Image";
import TextLabel from "../atoms/TextLabel";
import { Stack } from "@material-ui/core";
import { classicNameResolver } from "typescript";

type Props = {
  src: string;
  alt: string;
  classname: string;
  text: string;
};

const Content: React.FC<Props> = ({ src, alt, classname, text }) => {
  return (
    <>
      <Stack>
        <Image
          src={src}
          alt={alt}
          classname={classname}
        ></Image>
        <TextLabel classname={classname} text={text}></TextLabel>
      </Stack>
    </>
  );
};

export default Content;
