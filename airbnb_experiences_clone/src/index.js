import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Navbar from './components/Navbar.js'
import Hero from './components/Hero.js'
import Card from './components/Card.js'

import data from './data.js'

const cards = data.map(x => {
  return <Card 
    id={x.id}
    title={x.title}
    description={x.description}
    price={x.price}
    coverImg={x.coverImg}
    rating={x.stats.rating}
    reviewCount={x.stats.reviewCount}
    location={x.location}
    openSpots={x.openSpots}
    
  />
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <main className='wrapper'>
    <div className='container'>
      <Navbar />
      <div className='page-body'>
        <Hero />
        <div>
          {cards}
        </div>
      </div>
    </div>
  </main>
);

/*

          <Card 
            img="katie-zaferes.png"
            rating="5.0"
            reviewCount={6}
            country="USA"
            title="Life Lessons with Katie Zaferes"
            price={136}
          />
*/