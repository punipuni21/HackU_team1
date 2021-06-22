import React from 'react';
import Typography from '@material-ui/core/Typography';

type Props = {
  className: string;
}

const AppName: React.FC<Props> = ({ className }) => {
  return (
    <Typography className={className} variant="h5" noWrap>
      AppName
    </Typography>
  )
}

export default AppName;