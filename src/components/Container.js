import React from 'react'
import './Container.css';
import TopContainer from './TopContainer.js';
import MainContainer from './MainContainer.js';

const Container = () => {
  return (
    <div className='container'>
        <TopContainer />
        <MainContainer />
    </div>
  )
}

export default Container