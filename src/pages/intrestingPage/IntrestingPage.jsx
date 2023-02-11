import React, { useState } from 'react'
import { useEffect } from 'react';
import css from './intrestingPage.module.css'



function IntrestingPage(props) {
  const [intrests, setIntrests] = useState([])

useEffect(() => {
  fetch('https://63e735abcbdc565873746f38.mockapi.io/vids')
  .then((res) => res.json())
  .then((data) => setIntrests(data))
}, [])

useEffect(() => {
  fetch('https://63e735abcbdc565873746f38.mockapi.io/vids2')
  .then((res) => res.json())
  .then((data) => setIntrests(data))
}, [])

  return (
    <div className={css.wrapper}>
    {
        intrests.map((item) => 
        <IntrestingPage key={item.id} {...item}/>
      )
    }
    <div className={css.vidsAlign}>
    <img className={css.vids} src={props.video} alt="" />
    <img className={css.vids} src={props.videos1} alt="" />
    <img className={css.vids} src={props.video} alt="" />

    </div>
    </div>
  )
}

export default IntrestingPage