import React from 'react'
import css from './Comment.module.css'

function Comment({author, comment, likes, createdAt}) {
    const date = new Date(createdAt).toLocaleDateString()
  return (
    
    <div className={css.wrapper}>
        <div>
        <b>{author}</b>
        {" "}
        {comment}
        </div>
        <div className={css.footer}>
            <div>Likes: {likes} </div>
            <div>{date}</div>
        </div>
    </div>
  )
}

export default Comment