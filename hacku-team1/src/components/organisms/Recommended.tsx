import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import RecommendButton from "../molecules/RecommendButton";
import RecommendAddButton from "../molecules/RecommendAddButton";
import { db } from "../../firebase/firebase";
import { DeleteForeverTwoTone } from "@material-ui/icons";
import DecoratedHead from "../molecules/DecoratedHead";
import RecommendIcon from "../atoms/RecommendIcon";
import { Box } from "@material-ui/core";

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
    // marginLeft: "40px",
  },
}));

const Recommended: React.FC<Props> = ({ myUid, otherUid }) => {
  const classes = useStyles();
  const [recommendedDataList, setRecommendedDataList] = useState([]);

  useEffect(() => {
    getData();
  }, [otherUid]);

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
      <Box mt={2}>
        <DecoratedHead
          color="primary.main"
          icon={
            <RecommendIcon
              size={28}
              color="#bb4d54"
              style={{ marginRight: "0.5rem" }}
            />
          }
          text="これ、おすすめです!"
        />
      </Box>
      <div className={classes.buttons}>
        {recommendedDataList.map((data: Data) => (
          <RecommendButton
            myUid={myUid}
            docid={data.docid}
            text={data.content}
            refURL={data.refURL}
            recommenderIDs={data.recommenderIDs}
            isMyPage={myUid === otherUid}
            reloadDB={getData}
            // onClick={}
          />
        ))}
      </div>
      {myUid !== otherUid && (
        <RecommendAddButton
          myUid={myUid}
          otherUid={otherUid}
          reloadDB={getData}
        />
      )}
    </div>
  );
};

export default Recommended;
