import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import { Link } from 'react-router-dom';
import { makeStyles, Theme } from '@material-ui/core/styles';

import SectionTab from '../atoms/sectionTab';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
  },
}));

const SectionBar: React.FC = () => {
  const classes = useStyles();
  return (
    // <div className={classes.root}>
      <Tabs TabIndicatorProps={{style: {backgroundColor: "white"}}}>
        <Link to="/"><SectionTab label="Top" /></Link>
        <SectionTab label="あなた" />
        <SectionTab label="みんな" />
      </Tabs>
    // </div>
  )
}

export default SectionBar