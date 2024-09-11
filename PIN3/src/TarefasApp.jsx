import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';


import axios from 'axios';
import RegisterPage from './pages/adminPages/RegisterPage/RegisterPage.ui';

export default function TarefasApp() {
  const [count, setCount] = useState(0)

  return (
  
    <BrowserRouter>
    <Routes>
    
    <Route path="/registro" element={<RegisterPage />} />
   
    </Routes>
    </BrowserRouter>
   
  );
}