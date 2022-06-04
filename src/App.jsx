import { useState } from 'react'
import Home from "./pages/Home/Home"
import Docentes from "./pages/Docentes/Docentes"
import Cadastro from "./pages/Cadastro/Cadastro"
import Atualizar from "./pages/Atualizar/Atualizar"
import Deletar from "./pages/Deletar/Deletar"
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
          <Route path="/" element={<Home />} />
          <Route path="/docentes" element={<Docentes />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/atualizar" element={<Atualizar />} />
          <Route path="/deletar" element={<Deletar />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
