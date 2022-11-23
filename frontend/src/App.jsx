import './App.css'

import React from 'react'
import homepage from './components/homepage/homepage'
import Footer from './components/footer/footer'


function App() {

  return (
    // <div className="App">
    //   {/* <h1>MERNsters Inc</h1> */}
    //   <Footer/>
    // </div>
    <Browser>
    <Routes>
      <Route path="/" element={<homepage/>}/>
      <Route path="/footer" element={<Footer/>}/>
    </Routes>
    </Browser>
  )
}

export default App
