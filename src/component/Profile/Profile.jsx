import React from 'react'
import classes from './Profile.module.css'
import MyPost from './MyPost/MyPost'
import ProfileInfo from './Profileinfo/Profileinfo'
import { addPost } from '../../redux/state'

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo />
            <MyPost posts = { props.state.posts } addPost = { props.addPost } />
        </div>
    )
}
export default Profile