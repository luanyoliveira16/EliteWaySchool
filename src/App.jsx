import { useState } from 'react'
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css'

function App() {

  return (
    <div className="App">
      <p>olaaaaa</p>
      <BrowserRouter>
        <Link to="/home">Home</Link>
        <Routes>       
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
