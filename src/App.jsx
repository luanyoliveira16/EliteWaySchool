import { useState } from 'react'
import Docentes from "./pages/Docentes/Docentes"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css'

function App() {

  return (
    <div className="App">
      <p>olaaaaa</p>
      <BrowserRouter>
        { //<Link to="/home">Home</Link>
        }
       <Link to="/docentes">Docentes</Link>
       
        <Routes>      
         { //<Route path="/home" element={<Home />} />
          } 
         <Route path="/docentes" element={<Docentes />} />
        
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
