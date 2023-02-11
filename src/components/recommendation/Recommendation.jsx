import React from 'react'
import css from './Recommendation.module.css'

function Recommendation(props) {
  return (
    
    <div className={css.wrapper}>    
     <div className={css.leftRecomPart}>
        <img className={css.profilePic} src={props.image} alt="" />
        <div>
        {props.author} <br />
        <span className={css.yourFol}> Your Follower</span>
        </div>
        </div>
        <a href="">Follow</a>
    </div>
  )
}

export default Recommendation