import React from 'react';
import classes from './MyPost.module.css';
import Post from './Post/Post';

function MyPost() {

    let postData = [
        { id: 1, message: "Hi how are you?", likesCount: 12 },
        { id: 2, message: "It's a good!", likesCount: 15 }
    ]

    return (
        <div className={classes.item}>
            <div><h3>My post</h3></div>
            <textarea></textarea>
            <div>
                <button>Add post</button>
                <button>Remove</button>
                <div className={classes.props}>
                    <Post message={postData[0].message} likesCount={postData[0].likesCount} />
                    <Post message={postData[1].message} likesCount={postData[1].likesCount} />
                </div>
            </div>
        </div>
    )
}
export default MyPost;