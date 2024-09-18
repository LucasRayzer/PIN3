import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';


import axios from 'axios';
import RegisterPage from './pages/adminPages/RegisterPage/RegisterPage.ui';
import HomePage from './pages/adminPages/HomePage/HomePage.ui';

export default function TarefasApp() {
  const [count, setCount] = useState(0)

  return (
  
    <BrowserRouter>
    <Routes>
    
    <Route path="/registroAdm" element={<RegisterPage />} />
    <Route path="/homeAdm" element={<HomePage/>} />
   
    </Routes>
    </BrowserRouter>
   
  );
}