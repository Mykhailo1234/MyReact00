import React from 'react';
import classes from './MyPost.module.css';
import Post from './Post/Post';

function MyPost() {
    return (
        <div className={classes.item}>
            <div>My post</div>
            <textarea></textarea>
            <div>
                <button>Add post</button>
                <button>Remove</button>
                <div className={classes.props}>
                    <Post message="Hi how are you?" />
                    <Post message="It's a good!" />
                </div>
            </div>
        </div>
    )
}
export default MyPost;