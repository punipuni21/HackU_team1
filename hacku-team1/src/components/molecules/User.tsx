import React from 'react';
import UserIcon from '../atoms/UserIcon';
import UserName from '../atoms/UserName';


interface Props {
    name: string;
    picture_src: string;
}

const User = (props: Props) => {
    return (
        <div>
            <UserIcon picture_src={props.picture_src} />
            <UserName name={props.name} />
        </div>
    );
}


export default User;
