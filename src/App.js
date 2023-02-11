import './App.css';
import LoginPage from './pages/loginPage/LoginPage';
import { Link } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/homePage/homePage';
import Sidebar from './components/sidebar/Sidebar'
import { useState } from 'react';

import PrivateRoute from './components/routes/PrivateRoute';
import PublicRoute from './components/routes/PublicRoute';

import ReelsPage from './pages/reelsPage/ReelsPage';
import IntrestingPage from './pages/intrestingPage/IntrestingPage'
import SearchPage from './pages/searchPage/SearchPage'
import MessagePage from './pages/messagePage/MessagePage';
import NotificationPage from './pages/notificationPage/NotificationPage';
import CreatePage from './pages/createPage/CreatePage';
import ProfilePage from './pages/profilePage/ProfilePage';



function App() {
  const [isAuth, setAuth] = useState(true)
  return (    
    <div className="App">
      <Sidebar />
      <Routes>
        <Route path='/' element={
        <PrivateRoute isAuth={isAuth}>
          <HomePage />
        </PrivateRoute>} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='/post/:id' element={<h1>hello post</h1>} />
        <Route path='/intresting' element={<IntrestingPage />} />
        <Route path='/reels' element={<ReelsPage />} />
        <Route path='/chat' element={<MessagePage />} />
         <Route path='/notification' element={<NotificationPage />} />
        <Route path='/create' element={<CreatePage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/Login' element={<PublicRoute isAuth={isAuth}><LoginPage /> </PublicRoute>}/>

      </Routes>
    </div>
  );
}

export default App;
