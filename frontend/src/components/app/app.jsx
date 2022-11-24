import React from 'react';
import Homepage from '../homepage/homepage'
import Form from '../signup/Form'
import {Route, Routes} from "react-router-dom";
import Footer from '../footer/footer';

const App = () => {
    return (
      <>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/signup' element={<Form/>}/>
      </Routes>
      <Footer />
      </>
    );
}

export default App;