import React from 'react';
import classes from './Profile.module.css'
import MyPost from './MyPost/MyPost';
import ProfileInfo from './Profileinfo/Profileinfo';

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo />
            <MyPost posts={ props.posts }/>
        </div>
    );
}
export default Profile;