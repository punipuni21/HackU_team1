import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import RecommendButton from "../molecules/RecommendButton";
import { db } from "../../firebase/firebase";
import { DeleteForeverTwoTone } from "@material-ui/icons";

type Props = {
  myUid: any;
  otherUid: any;
};

type Data = {
  docid: string;
  content: string;
  refURL: string;
  recommenderIDs: Array<string>;
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

const Recommended: React.FC<Props> = ({ myUid, otherUid }) => {
  const classes = useStyles();
  const [recommendedDataList, setRecommendedDataList] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const tmpData: any = [];
    await db
      .collection("Tips")
      .where("userID", "==", otherUid)
      .where("done", "==", false)
      .get()
      .then(async (snapshots) => {
        snapshots.docs.map((doc) => {
          tmpData.push({
            docid: doc.id,
            content: doc.data().content,
            refURL: doc.data().refURL,
            recommenderIDs: doc.data().recommenderIDs,
          });
        });
      });
    setRecommendedDataList(tmpData);
  };

  return (
    <div>
      <h2 className={classes.h2}>おすすめです。</h2>
      <div className={classes.buttons}>
        {recommendedDataList.map((data: Data) => (
          <RecommendButton
            myUid={myUid}
            docid={data.docid}
            text={data.content}
            refURL={data.refURL}
            recommenderIDs={data.recommenderIDs}
            isMyPage={myUid===otherUid}
            // onClick={}
          />
        ))}
      </div>
    </div>
  );
};

export default Recommended;
