import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CompleteButton from "../molecules/CompleteButton";
import { db } from "../../firebase/firebase";

type Props = {
  myUid: any;
  otherUid: any;
};

type Data = {
  content: string;
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
    marginLeft: "40px",
  },
}));

const Complete: React.FC<Props> = ({ myUid, otherUid }) => {
  const classes = useStyles();
  const [completeDataList, setCompleteDataList] = useState([]);

  useEffect(() => {
    getData();
  }, []);

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
            imageURL: doc.data().imageURL,
            doneContent: doc.data().doneContent,
          });
        });
      });
    setCompleteDataList(tmpData);
  };

  return (
    <div>
      <h2 className={classes.h2}>達成！！</h2>
      <div className={classes.buttons}>
        {completeDataList.map((data: Data) => (
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
