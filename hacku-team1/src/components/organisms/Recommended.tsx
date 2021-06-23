import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import RecommendButton from "../molecules/RecommendButton";

interface Props {
  text: string;
}

const useStyles = makeStyles((theme) => ({
  h2: {
    textAlign: "left",
    marginTop: "20px",
    marginRight: "0px",
    marginBottom: "10px",
    marginLeft: "20px",
  },
  buttons: {
    marginLeft: "40px",
  },
}));

const Recommended = (props: Props) => {
  const classes = useStyles();
  return (
    <div>
      <h2 className={classes.h2}>おすすめです。</h2>
      <div className={classes.buttons}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
          <RecommendButton
            text={props.text + num}
            onClick={() => alert(props.text + num + "を押した")}
          />
        ))}
      </div>
    </div>
  );
};

export default Recommended;
