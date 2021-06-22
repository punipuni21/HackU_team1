import React from 'react';
import Button from '@material-ui/core/Button';

type Props = {
    className: string;
    label: string;
}

const OutlineButton: React.FC<Props> = ({ className, label }) => {
  return (
    <Button variant='outlined' className={ className }>
      {label}
    </Button>
  )
}

export default OutlineButton