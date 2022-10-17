import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Navbar from './components/Navbar.js'
import Form from './components/Form.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <main className='wrapper'>
    <div className='container'>
      <Navbar />
      <div className='page-body'>
        <Form />
      </div>
    </div>
  </main>
);