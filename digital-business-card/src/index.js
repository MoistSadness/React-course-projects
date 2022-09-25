import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Info from './components/Info.js'
import About from './components/About.js'
import Interests from './components/Interests.js'
import Footer from './components/Footer.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<main className='wrapper'>
		<div className='container'>
			<Info 		/>
			<About 		/>
			<Interests 	/>
			<Footer 	/>
		</div>
	</main>
);

