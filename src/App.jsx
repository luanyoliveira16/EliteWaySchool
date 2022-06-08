import { useState } from 'react'
import Home from "./pages/Home/Home"
import Docentes from "./pages/Docentes/Docentes"
import Cadastro from "./pages/cadastro/Cadastro"
import Atualizar from "./pages/Atualizar/Atualizar"
import Deletar from "./pages/Deletar/Deletar"
import CarregamentoPag from './components/CarregamentoPag/CarregamentoPag'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css'
import Contato from './pages/Contato/Contato';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <CarregamentoPag component={
      <div className="App">
        <BrowserRouter>

         <Navbar/>

          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/docentes" element={<Docentes />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/atualizar" element={<Atualizar />} />
            <Route path="/deletar" element={<Deletar />} />
          </Routes>
       
         <Footer/>

        </BrowserRouter>
      </div>
      }
    />
  )
}

export default App
