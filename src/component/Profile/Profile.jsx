import React from 'react';
import classes from './Profile.module.css'
import MyPost from './MyPost/MyPost';
import ProfileInfo from './Profileinfo/Profileinfo';


function Profile() {
    return (
        <div>
            <ProfileInfo />
            <MyPost />
        </div>
    );
}
export default Profile;