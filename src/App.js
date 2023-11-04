import React from 'react'
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Components/Landing_Page/LandingPage';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Navbar />
              <Routes>
                <Route path="/" element={<LandingPage />} />

              </Routes>
        </BrowserRouter>

    </div>
  );
}
export default App;
