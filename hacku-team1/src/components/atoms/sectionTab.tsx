import React from 'react';
import Tab from '@material-ui/core/Tab';

type Props = {
  label: string;
}

const SectionTab: React.FC<Props> = ({ label }) => {
  return (
    <Tab label={label} />
  )
}

export default SectionTab