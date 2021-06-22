import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import { Link } from 'react-router-dom';
import { makeStyles, Theme } from '@material-ui/core/styles';

import SectionTab from '../atoms/sectionTab';

const SectionBar: React.FC = () => {
  return (
    <Tabs TabIndicatorProps={{style: {backgroundColor: "white"}}}>
      <Link to="/"><SectionTab label="Top" /></Link>
      <Link to="/mypage"><SectionTab label="わたし" /></Link>
      <SectionTab label="みんな" />
    </Tabs>
  )
}

export default SectionBar