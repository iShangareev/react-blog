import React from 'react';
import '../styles/App.css'
import {  Routes, Route } from 'react-router-dom';
import About from '../pages/About';
import Posts from '../pages/Posts';
import Error from '../pages/Error';
import PostIdPages from '../pages/PostIdPages';

const AppRouter = () => {
  return (
    <Routes>
      <Route path='*' element={<Error/>}/>
      <Route path='/about' element={<About/>}/>
      <Route exact path='/posts/:id' element={<PostIdPages/>}/>
      <Route exact path='/posts' element={<Posts/>}/>
    </Routes>
  );
};

export default AppRouter;
