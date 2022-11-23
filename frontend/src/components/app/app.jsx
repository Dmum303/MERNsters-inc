import React from 'react';
import Homepage from '../homepage/homepage'
import SignUpForm from '../signup/signup'
import {Route, Routes} from "react-router-dom";
import Footer from '../footer/footer';

const App = () => {
    return (
      <>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/signup' element={<SignUpForm/>}/>
      </Routes>
      <Footer />
      </>
    );
}

export default App;