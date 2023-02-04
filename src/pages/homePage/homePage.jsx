import React from 'react'
import Sidebar from './../../components/sidebar/Sidebar'
import css from './HomePage.module.css'
// import alnassr from '../assetsForPages/download.png'
// import dot from '../assetsForPages/3dot.png'
// import like from '../assetsForPages/hearts.png'
// import send from '../assetsForPages/paper-plane-message-1.png'
// import comment from '../assetsForPages/speech-bubble.png'
// import save from '../assetsForPages/'

// users = 'https://63de1199f1af41051b0d1b28.mockapi.io'


import Post from '../../components/post/Post'


function HomePage() {
  return (
    <div className='pageContainer'>
      <div className={css.content}>
        <div className={css.innerContent}>
          <div className={css.storis}>Stories</div>
          <div className={css.posts}>
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
        </div>
        <div className={css.recomendation}>recomendations</div>
      </div>
    </div>
  )
}

export default HomePage