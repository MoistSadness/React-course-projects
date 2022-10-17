import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import data from './data.js'
import Navbar from "./components/Navbar.js"
import Card from "./components/Card.js"


const cardData = data.map(item => {
  //console.log(item)
  return(
    <Card item={item}/>
  )
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='wrapper'>
    <div className='container'>
      <Navbar />
      {cardData}
    </div>
  </div>
);