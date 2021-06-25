import React from 'react'

type Props = {
  size?: number
  color?: string
  style?: any
};

const UserIcon: React.FC<Props> = (props: Props) => {
  return (
    <svg
      style={props.style}
      width={props.size || 54}
      height={props.size || 54}
      viewBox="0 0 54 54"
      fill={props.color || "#FFFFFF"}
      stroke={props.color || "#000000"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M27 26.5409C33.1176 26.5409 38.0769 21.6069 38.0769 15.5205C38.0769 9.43411 33.1176 4.50011 27 4.50011C20.8824 4.50011 15.9231 9.43411 15.9231 15.5205C15.9231 21.6069 20.8824 26.5409 27 26.5409Z"/>
      <path d="M32.7692 31.133H21.2308C14.5385 31.133 9 36.6432 9 43.3014C9 44.9085 9.69231 46.286 11.0769 46.9748C13.1538 48.1228 17.7692 49.5003 27 49.5003C36.2308 49.5003 40.8462 48.1228 42.9231 46.9748C44.0769 46.286 45 44.9085 45 43.3014C45 36.4136 39.4615 31.133 32.7692 31.133Z"/>
    </svg>
  );
};

export default UserIcon
