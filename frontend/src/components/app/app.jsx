import React from 'react';
import Homepage from '../homepage/homepage'
import Form from '../signup/Form'
import {Route, Routes} from "react-router-dom";
import Footer from '../footer/footer';
import '../../App.css';
import LoginForm from '../login/loginForm';

const App = () => {
    return (
      <>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/signup' element={<Form/>}/>
        <Route path='/login' element={<LoginForm/>}/>
      </Routes>
      <Footer />
      </>
    );
}

export default App;