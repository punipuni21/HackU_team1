import React from "react";

type Props = {
  size?: number;
  color?: string;
  style?: any;
};

const BiginnerIcon: React.FC<Props> = (props: Props) => {
  return (
    <svg
      style={props.style}
      width={props.size || 54}
      height={props.size || 54}
      viewBox="0 0 512 512"
      fill={props.color || "none"}
      stroke={props.color || "#000000"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M256,120.07L145.016,12.742C131.953,0.102,112.594-3.492,95.844,3.586
		c-16.734,7.109-27.609,23.531-27.609,41.719v274c0,18.406,7.469,36.031,20.703,48.844L224.5,499.258
		c17.563,16.984,45.438,16.984,62.984,0l135.578-131.109c13.234-12.813,20.703-30.438,20.703-48.844v-274
		c0-18.188-10.875-34.609-27.609-41.719c-16.75-7.078-36.109-3.484-49.172,9.156L256,120.07z M379.844,311.414
		c0,6.141-2.484,12.016-6.906,16.281L256,440.805V209.008l22.219-21.5l82.438-79.719c3.25-3.156,8.109-4.063,12.281-2.281
		c4.188,1.766,6.906,5.875,6.906,10.422V311.414z"
      />
    </svg>
  );
};

export default BiginnerIcon;
