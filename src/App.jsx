import React from 'react';
import Navbar from './Components/Header/Navbar';
import Carrusel from './Components/Body/Carrusel';
import Testimonios from './Components/Body/Testimonies';
import Rating from './Components/Body/StarRat';
function App() {
  

  return (
    <>
      <div>
      <main>
        <Navbar/>
        <Carrusel/>
        <Rating/>  
        <Testimonios/>  
         </main> </div>
    </>
  )
}

export default App
