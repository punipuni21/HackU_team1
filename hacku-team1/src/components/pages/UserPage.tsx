import React from 'react';
import User from '../molecules/User';
import Status from '../molecules/Status';
import Recommended from '../molecules/Recommended';
import Complete from '../molecules/Complete';
// import Button from '../atoms/Button'

const UserPage = () => {
    return (
        <div>
            <User name="asdf" picture_src="/logo192.png" />
            <Status text="test_status" />
            <Recommended text="test_recommended" />
            <Complete text="test_complete" />
            {/* <Button text="qwer" onClick={() => ("asd")} /> */}
        </div>
    );
}


export default UserPage;
