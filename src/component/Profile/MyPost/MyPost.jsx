import React from 'react';
import classes from './MyPost.module.css';
import Post from './Post/Post';

const MyPost = (props) => {

    let postsElement =
        props.posts.map(posts => <Post message = { posts.message } likesCount = { posts.likesCount } />)

    return (
        <div className = { classes.item }>
            <h3> My post </h3>
            <textarea></textarea>
            <div>
                <button> Add post </button>
                <button> Remove </button>
                <div className = { classes.props }>
                    { postsElement }
                </div>
            </div>
        </div>
    )
}
export default MyPost;