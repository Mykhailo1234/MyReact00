import React from 'react';
import classes from './Post.module.css';

function Post(props) {

    return (
        <div className = {classes.post}>
            <div>New Post</div>
            <div className={classes.item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm90m9H82kf98dCcE7nvyjGiqAC2IGfY4xFw&usqp=CAU" />
                {props.message}
            </div>
                <div>
                <span>like  </span> {props.likesCount}
                </div>
            
        </div>
    )
}
export default Post;