import React from 'react';
import Tabs from '@material-ui/core/Tabs';

import SectionTab from '../atoms/sectionTab';

const SectionBar: React.FC = () => {
  return (
    <Tabs>
      <SectionTab label="Top" />
      <SectionTab label="あなた" />
      <SectionTab label="みんな" />
    </Tabs>
  )
}

export default SectionBar