import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CompleteButton from "../molecules/CompleteButton";

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

const Complete: React.FC<Props> = ({ dataList }) => {
  const classes = useStyles();
  return (
    <div>
      <h2 className={classes.h2}>達成！！</h2>
      <div className={classes.buttons}>
        {dataList.map((data) => (
          <CompleteButton
            text={data.content}
            img={data.imageURL}
            msg={data.doneContent}
            // onClick={}
          />
        ))}
      </div>
    </div>
  );
};

export default Complete;
