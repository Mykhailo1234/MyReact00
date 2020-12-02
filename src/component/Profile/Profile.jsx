import React from 'react';
import classes from './Profile.module.css'
import MyPost from './MyPost/MyPost';

function Profile() {
    return (
        <div className = {classes.content}>
            <img src="https://football24.ua/resources/photos/news/1200x675_DIR/202011/634248.jpg?202011235838" />
            <div className = {classes.item}>
                ava + des
    </div>
        <MyPost />
        </div>
    );
}
export default Profile;