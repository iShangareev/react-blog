import React from 'react';
import '../styles/App.css'
import {  Routes, Route } from 'react-router-dom';
import About from '../pages/About';
import Posts from '../pages/Posts';
import Error from '../pages/Error';

const AppRouter = () => {
  return (
    <Routes>
      <Route path='*' element={<Error/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/posts' element={<Posts/>}/>
    </Routes>
  );
};

export default AppRouter;
