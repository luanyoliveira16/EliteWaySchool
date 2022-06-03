import { useState } from 'react'
import Docentes from "./pages/Docentes/Docentes"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css'
import Contato from './pages/Contato/Contato';

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
         <Route path="/contato" element={<Contato />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
