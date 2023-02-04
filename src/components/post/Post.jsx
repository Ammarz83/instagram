import React from 'react'
import css from './Post.module.css'

function Post() {
  return (
    <div className={css.wrapper}>
        <div className={css.header}>
            <Link>
            
            </Link>
        </div>
        <div>
            <img className={css.image} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWl6XwtliGfXnBov_DuTqRDgqqxOzR9Hzu8Q&usqp=CAU" alt="img" />
        </div>
        <div>Actions</div>
        <div>Info</div>

    </div>
  )
}

export default Post