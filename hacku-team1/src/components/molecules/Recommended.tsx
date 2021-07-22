import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import RecommendButton from './RecommendButton';
import RecommendAddButton from './RecommendAddButton';

type Data = {
  docid: string;
  content: string;
  refURL: string;
  recommenderIDs: Array<string>;
};

type Props = {
  myUid: any;
  otherUid: any;
  recommendedDataList: Data[];
  getData: any;
};

const useStyles = makeStyles((theme) => ({}));

const Recommended: React.FC<Props> = ({ myUid, otherUid, recommendedDataList, getData }) => {
  const classes = useStyles();

  return (
    <>
      <div>
        {recommendedDataList.map((data: Data, index) => (
          <RecommendButton
            key={myUid + data.content + index}
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
        <RecommendAddButton myUid={myUid} otherUid={otherUid} reloadDB={getData} />
      )}
    </>
  );
};

export default Recommended;
