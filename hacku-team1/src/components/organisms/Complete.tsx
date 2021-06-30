import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CompleteButton from "../molecules/CompleteButton";
import { db } from "../../firebase/firebase";
import DecoratedHead from "../molecules/DecoratedHead";
import RecommendIcon from "../atoms/RecommendIcon";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { Box } from "@material-ui/core";

type Props = {
  myUid: any;
  otherUid: any;
};

type Data = {
  content: string;
  refURL: string;
  imageURL: string;
  doneContent: string;
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
    // marginLeft: "40px",
  },
}));

const Complete: React.FC<Props> = ({ myUid, otherUid }) => {
  const classes = useStyles();
  const [completeDataList, setCompleteDataList] = useState([]);

  useEffect(() => {
    getData();
  }, [otherUid]);

  const getData = async () => {
    const tmpData: any = [];
    await db
      .collection("Tips")
      .where("userID", "==", otherUid)
      .where("done", "==", true)
      .get()
      .then(async (snapshots) => {
        snapshots.docs.map((doc) => {
          tmpData.push({
            content: doc.data().content,
            refURL: doc.data().refURL,
            imageURL: doc.data().imageURL,
            doneContent: doc.data().doneContent,
          });
        });
      });
    setCompleteDataList(tmpData);
  };

  return (
    <div>
      <Box mt={1}>
        <DecoratedHead
          color="primary.main"
          icon={<CheckCircleIcon color="primary" />}
          text="達成"
        />
      </Box>
      <div className={classes.buttons}>
        {completeDataList.map((data: Data) => (
          <CompleteButton
            text={data.content}
            refURL={data.refURL}
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
