import React from 'react';
import Navbar from './Components/Navbar';
import Menu from './Components/Menu';
import Carrusel from './Components/Body/Carrusel';
import './Styles/Main.css';
function App() {
  

  return (
    <>
      <div>
      <main>
        <Navbar/>
        
                  
          <Carrusel/>          
          <Menu/>  
         </main> </div>
    </>
  )
}

export default App
