import React from 'react';
import OutlineButton from '../atoms/outlineButton'

type Props = {
  className: string;
}

const LogoutButton: React.FC<Props> = ({ className }) => {
  return (
    <OutlineButton
      className={className}
      label='Logout'
    />
  )
}

export default LogoutButton

