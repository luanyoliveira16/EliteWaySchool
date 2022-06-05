import { useState } from 'react'
import Docentes from "./pages/Docentes/Docentes"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css'
import Cadastro from './pages/cadastro/Cadastro';

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
         <Route path="/cadastro" element={<Cadastro />} />
        
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
