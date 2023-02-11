import React, { useState } from 'react'
import Sidebar from './../../components/sidebar/Sidebar'
import css from './HomePage.module.css'
// import alnassr from '../assetsForPages/download.png'
// import dot from '../assetsForPages/3dot.png'
// import like from '../assetsForPages/hearts.png'
// import send from '../assetsForPages/paper-plane-message-1.png'
// import comment from '../assetsForPages/speech-bubble.png'
// import save from '../assetsForPages/'

// users = 'https://63de1199f1af41051b0d1b28.mockapi.io'

import { useEffect } from 'react';
import Post from '../../components/post/Post'
import Stories from '../../components/stories/Stories'
import Recommendation from '../../components/recommendation/Recommendation'
import Loader from '../../components/loader/Loader'





function HomePage() {

  const  [posts, setPosts] = useState([])
  const  [isLoading, setLoading] = useState(true)
  const [recomendation, setRecomendation] = useState([]) ;
  const [story, setStory] = useState([])


  useEffect(() => {
    fetch('https://63de1199f1af41051b0d1b28.mockapi.io/posts')
    .finally(() => setLoading(false))
    .then((res) => res.json())
    .then((data) => setPosts(data))
  }, [])

  useEffect(() => {
    fetch('https://63de1199f1af41051b0d1b28.mockapi.io/reccomendation')
    .finally(() => setLoading(false))
    .then((res) => res.json())
    .then((data) =>setRecomendation(data))
  },[])

  if(isLoading) return <Loader />

  
  return (
    <div className='pageContainer'>
      <div className={css.content}>
        <div className={css.innerContent}>
          <div className={css.storis}>
            <Stories />
            <img src="" alt="" />
          </div>
          <div className={css.posts}>
            {
              posts.map((item) => 
              <Post key={item.id} {...item}/>
              )
            }
          </div>
        </div>
        <div className={css.recomendation}>
        <div className={css.userInfo}>
          <div className={css.leftPartOfUser}>
            <img className={css.userProfilePic} src="https://hips.hearstapps.com/hmg-prod/images/2023-mclaren-artura-101-1655218102.jpg?crop=1.00xw:0.847xh;0,0.153xh&resize=1200:*" alt="" />
            <p className={css.user}>user234234 <br />
              <span className={css.name}>USER$^@</span>
            </p>
            </div>
            <div>
              <a href="">switch</a>
            </div>
            
        </div>
        <div className={css.belowUserInfo}>
            <p>Recommendation for you</p> 
            <a href="">ALL</a> 
        </div>
        <div>
          {
            recomendation.map((item) => 
            <Recommendation key={item.id} {...item}/>
            )
          }
       
     </div>
          
        </div>
      </div>
    </div>
  )
}

export default HomePage