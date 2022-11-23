// From index.js file 
import React from 'react'
import ReactDOM from 'react-dom/client';
import './homepage.css'
import App from '../../App.jsx';
import { BrowserRouter } from 'react-router-dom';

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
        <div className='overlay'>

        <div className='signup-title'>
        <h1>friendzone</h1>
        </div>
        

        
        <div className='signup-form'></div>
        <div className='signup-button'><p>Sign up form</p></div>
        <div className='homepage-body'></div>
        <div className='footer'></div>

        </div>
        </>
    
    )
}



export default Homepage;