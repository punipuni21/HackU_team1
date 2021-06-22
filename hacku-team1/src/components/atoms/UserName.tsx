import React from 'react';

interface Props {
    name: string;
}

const UserName = (props: Props) => {
    return (
        <h1 className="UserName">{props.name}</h1>
    );
}


export default UserName;
