// From index.js file 
import React from 'react'
import ReactDOM from 'react-dom/client';
import './homepage.css'
import App from '../../App.jsx';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  );

const Homepage = () => {
    return(
      <>
      <NavBar />
      <div className='homepage-form'>
        
        <div className='signup-title'>
        <h1>Swipe Right®</h1>
        </div>
  
        <div className='signup-button'><p>Create an account</p></div>
        <div className='footer'></div>


    </div> 
    </>
    )
}



export default Homepage;