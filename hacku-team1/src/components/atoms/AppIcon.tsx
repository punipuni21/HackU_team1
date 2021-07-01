import React from "react";

type Props = {
  size?: number;
  color?: string;
  style?: any;
};

const UserIcon: React.FC<Props> = (props: Props) => {
  return (
    <svg
      style={props.style}
      width={props.size || 55}
      height={props.size || 55}
      viewBox="0 0 254 254"
      fill={props.color || "none"}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <clipPath id="clip-path">
          <circle cx="126.998" cy="127.003" r="127" style={{ fill: "none" }} />
        </clipPath>
        <clipPath id="clip-path-2">
          <circle cx="127.252" cy="126.545" r="127" style={{ fill: "none" }} />
        </clipPath>
      </defs>
      <g style={{ clipPath: "url(#clip-path)" }}>
        <g style={{ clipPath: "url(#clip-path-2)" }}>
          <circle
            cx="126.841"
            cy="127.122"
            r="127"
            style={{ fill: "#f69896" }}
          />
          <polygon
            points="215 -47 99 266 202 279 235 -45 215 -47"
            style={{ fill: "#fff" }}
          />
          <path
            d="M189.5,148.4l2.02-26.05-68.732-7.437-20.974-2.775-4.9,6.091-13.2-5.433-5.634-8.325L67.028,101.6l-20.06-2.393-10.377,7.841L36.5,120.427l7.03,26.553s62.133,32.5,69.665,34.356,38.555,16.6,38.555,16.6l20.306,5.092Z"
            style={{ fill: "#f69896" }}
          />
          <path
            d="M173.723-39.735s-.37,37.528-4.668,57.546-24.777,87.5-24.777,87.5l34.755,12.445S196.591,85.083,204.054,71.9s19-40.362,22.092-51.131,12.209-46.04,12.209-46.04Z"
            style={{ fill: "#f69896" }}
          />
          <path
            d="M227.7,36.706c-9.477,26.43-21.069,51.809-36.044,75.608-1.043,1.656-2.079,3.313-1.206,5.974,2.357,7.191-.6,9.245-8.46,8.153-9.361-1.3-18.3-4.448-27.577-6.062-1.014,2.92,1.441,2.9,2.348,3.864,2.5,2.65,3.96,5.446,1.271,8.585a6.383,6.383,0,0,1-8.879,1.094c-8.919-6.145-17.593-12.645-26.362-19.008-3.833-1-3.726-4.266-4.17-7.219,4.012-6.716,10.435-5.585,16.331-4.409,11.362,2.268,22.814,4.5,33.812,8.041,8.246,2.654,11.5-2.055,14.325-7.474,9.367-17.969,19.419-35.7,27.13-54.377A427.243,427.243,0,0,0,227.336-.793c2.912-10.646,5.536-21.333,7.767-32.079a152.763,152.763,0,0,0-55.392-23.147q.2,4.071.382,8.146c1.919,43.347-6.144,85.16-21.085,125.744A53.35,53.35,0,0,1,154.97,86.8c-1.48,2.483-3.344,5.137-7.07,3.162-3.2-1.7-4.379-3.677-3.334-7.713,2.4-9.271,6.521-17.888,9.307-27.032C164.206,21.3,169.528-13.06,168.2-48.663c-.115-3.084-.269-6.17-.44-9.258a151.923,151.923,0,1,0,77.99,32.933A503.952,503.952,0,0,1,227.7,36.706Zm-69.855,164.94c-1.708,4.089-4.7,6.066-9.756,3.939-12.92-5.438-25.941-10.611-38.218-17.457C93,178.72,74.159,173.662,57.2,164.463c-6.536-3.545-12.854-7.511-19.134-11.5-5.652-3.59-8.489-8.084-3.813-14.569,3.128-4.337,2.8-7.888-.952-12.466-9.956-12.136-7.6-26.688,8.208-32.354A35.79,35.79,0,0,1,62.6,95.368c3.157,1.324,5.668,2.5,4.426,6.232-1.193,3.587-3.627,5.907-7.912,4.843-3.014-.748-6.005-1.681-9.066-2.122-3.82-.551-7.543-.7-9.556,3.9-1.865,4.251-1.244,7.815,1.835,11.1a68.987,68.987,0,0,0,19.456,14.207,767.742,767.742,0,0,0,70.663,31.933c3.563,1.371,6.122,3.165,4.27,7.085-1.585,3.354-4.678,5.585-8.623,4.062-15.506-5.99-31.237-11.467-45.9-19.449-9.7-5.281-20.561-8.291-29.527-15.149-.972-.744-3.756-4.379-5.85-.929s1.5,4,3.434,5.013c9.857,5.185,19.67,10.471,29.694,15.318,24,11.6,48.239,22.678,73,32.559C156.65,195.446,159.607,197.431,157.846,201.646Zm-25.157-61.717c-3.746,2.958-6.806,1.343-9.674-2.076-5.329-6.354-10.99-12.43-16.706-18.839-1.936,3.054-1.135,6.265-1.408,9.379-.307,3.5-1.545,6.695-5.441,8.388-4.518,1.964-5.036-2.353-6.7-4.092-7.144-7.448-13.666-15.473-18.251-24.812-1.585-3.227-4.08-6.876,1.078-9.667,4.751-2.57,6.593.243,8.642,3.851,2.226,3.919,5,7.526,7.547,11.282,3.5-2.725,2.325-6.586,2.665-9.862.307-2.973.742-5.04,3.94-6.095,3.074-1.014,5.166-.2,7.172,2.1,4,4.6,8.14,9.088,12.221,13.623,3.3.281,2.846,3.992,4.923,5.391,2.416,4.505,5.867,8.206,9.363,11.844C135.033,133.443,136.768,136.708,132.689,139.929Zm56.157,8.783q-5.174,19.894-10.592,39.724c-.791,2.874-2.076,5.711-5.575,5.873-5.566,1.472-7.983-2.447-6.091-10.008,1.724-6.891,3.825-13.686,5.7-20.539,1.584-5.788,3.158-11.581,4.6-17.406,1.095-4.43,4-6.48,8.275-5.809C190.047,141.313,189.777,145.13,188.846,148.712Z"
            style={{ fill: "none" }}
          />
          <path
            d="M212.363,50.516c-7.711,18.68-17.763,36.409-27.13,54.378-2.824,5.419-6.079,10.127-14.324,7.474-11-3.54-22.45-5.774-33.812-8.041-5.9-1.177-12.32-2.308-16.331,4.409.443,2.953.337,6.224,4.17,7.219,8.769,6.362,17.442,12.863,26.362,19.008a6.383,6.383,0,0,0,8.879-1.094c2.688-3.139,1.223-5.935-1.272-8.585-.907-.964-3.362-.945-2.348-3.864,9.274,1.614,18.217,4.762,27.578,6.062,3.932.546,6.636.305,8.062-.971s1.576-3.587.4-7.182c-.873-2.662.164-4.318,1.206-5.974,14.975-23.8,26.567-49.179,36.044-75.608A503.739,503.739,0,0,0,247.9-23.948q-5.161-4.18-10.651-7.884c-2.23,10.747-4.854,21.434-7.767,32.08A427.165,427.165,0,0,1,212.363,50.516Z"
            style={{ fill: "#6e2227" }}
          />
          <path
            d="M156.016,56.258c-2.786,9.143-6.907,17.761-9.307,27.032-1.044,4.035.134,6.015,3.335,7.712,3.725,1.976,5.589-.678,7.069-3.161a53.354,53.354,0,0,0,4.039-8.929c14.941-40.585,23-82.4,21.084-125.745q-.18-4.074-.382-8.146-5.922-1.187-11.947-1.9c.171,3.088.326,6.175.44,9.259C171.672-12.02,166.35,22.338,156.016,56.258Z"
            style={{ fill: "#6e2227" }}
          />
          <path
            d="M124.838,119.542c-2.078-1.4-1.623-5.109-4.924-5.391-4.081-4.534-8.216-9.021-12.22-13.623-2.007-2.306-4.1-3.115-7.172-2.1-3.2,1.056-3.633,3.123-3.941,6.095-.339,3.277.831,7.137-2.665,9.863-2.545-3.756-5.321-7.363-7.546-11.282-2.05-3.609-3.892-6.422-8.642-3.851-5.159,2.791-2.664,6.44-1.079,9.667,4.586,9.339,11.107,17.363,18.251,24.812,1.668,1.738,2.185,6.055,6.7,4.092,3.9-1.693,5.134-4.885,5.442-8.388.273-3.115-.528-6.325,1.407-9.379,5.716,6.409,11.377,12.485,16.706,18.839,2.868,3.419,5.929,5.034,9.675,2.076,4.079-3.221,2.343-6.486-.632-9.583C130.705,127.748,127.253,124.047,124.838,119.542Z"
            style={{ fill: "#6e2227" }}
          />
          <path
            d="M187.308,141.587c-4.272-.67-7.18,1.38-8.276,5.81-1.44,5.825-3.014,11.617-4.6,17.405-1.877,6.854-3.978,13.649-5.7,20.54-.587,2.348-1.326,5.807-1.9,9.418a4.025,4.025,0,0,1-5.48,3.1c-3.517-1.418-6.9-2.23-8.394-2.825-24.765-9.882-49.007-20.957-73-32.559-10.024-4.847-19.837-10.134-29.695-15.319-1.934-1.017-5.531-1.559-3.434-5.012s4.878.185,5.85.928c8.966,6.858,19.824,9.868,29.528,15.15,14.666,7.982,30.4,13.458,45.9,19.448,3.944,1.524,7.038-.707,8.622-4.061,1.852-3.921-.707-5.715-4.269-7.086A767.372,767.372,0,0,1,61.8,134.591a69,69,0,0,1-19.456-14.206c-3.078-3.288-3.7-6.851-1.835-11.1,2.014-4.593,5.737-4.446,9.556-3.9,3.061.442,6.052,1.375,9.066,2.123,4.286,1.063,6.72-1.256,7.912-4.844,1.242-3.735-1.269-4.908-4.426-6.231a35.668,35.668,0,0,0-20.727-1.866,4.38,4.38,0,0,0-.721.2c-15.485,5.756-17.733,20.181-7.853,32.224,3.756,4.578,4.08,8.129.953,12.467-4.677,6.485-1.839,10.979,3.812,14.568,6.281,3.989,12.6,7.956,19.134,11.5,16.959,9.2,35.8,14.257,52.672,23.665,12.278,6.846,25.3,12.019,38.219,17.456,3.984,1.677,16.635,4.417,21.8,3.937,7.268.308,5.928-7.73,10.5-21.111,4.43-12.967,7.144-26.46,10.592-39.723C191.921,146.171,192.191,142.354,187.308,141.587Z"
            style={{ fill: "#6e2227" }}
          />
        </g>
      </g>
    </svg>
  );
};

export default UserIcon;
