import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import RecommendButton from "../molecules/RecommendButton";

type Props = {
  dataList: any[];
};

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

const Recommended: React.FC<Props> = ({ dataList }) => {
  const classes = useStyles();
  return (
    <div>
      <h2 className={classes.h2}>おすすめです。</h2>
      <div className={classes.buttons}>
        {dataList.map((data) => (
          <RecommendButton
            text={data.content}
            img={"./logo192.png"}
            // onClick={}
          />
        ))}
      </div>
    </div>
  );
};

export default Recommended;
