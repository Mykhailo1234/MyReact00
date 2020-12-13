import React from 'react';
import classes from './MyPost.module.css';
import Post from './Post/Post';

const MyPost = (props) => {

    let postsElement = props.posts.map(posts => <Post message = { posts.message } likesCount = { posts.likesCount } />)

    let newPostElement = React.createRef()

    let addPost = () => {
        let text = newPostElement.current.value
        props.addPost(text)
        newPostElement.current.value = ''
    }

    return (
        <div className = { classes.item }>
            <h3> My post </h3>
            <textarea ref = { newPostElement } ></textarea>
            <div>
                <button onClick = { addPost }> Add post </button>
                <div className = { classes.props }>
                    { postsElement }
                </div>
            </div>
        </div>
    )
}
export default MyPost