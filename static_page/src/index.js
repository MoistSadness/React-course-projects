import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import logo from './logo.svg'

import './styles.css'

function Header(){
	return(
		<header>
            <nav className='nav-container'>
				<img src={logo} alt='logo' className='logo'/>
				<ul className='nav-items'>
					<li className='list-item'>Pricing</li>
					<li className='list-item'>About</li>
					<li className='list-item'>Contact</li>
				</ul>
            </nav>
        </header>
	)
}

function Body(){
	return(
		<div className='body'>
			<h1>Reasons I want to learn React</h1>
			<ul>
				<li>It pays well</li>
				<li>Tons of jobs out there</li>
				<li>I want to own property someday</li>
			</ul>
		</div>
	)
}

function Footer(){
	return(
		<footer className='footer-container'>
            <small>© 2021 development. All rights reserved.</small>
        </footer>
	)
}


function Page(){
	return(
		<div className='app-container'>
			<Header />
			<Body />
			<Footer />
		</div>
	);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Page />);
	

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

