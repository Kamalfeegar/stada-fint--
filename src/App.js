import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import LandingPage from './component/LandingPage'
import BookingsPage from './component/BookingPage';
import './App.css';

function App() {
  return (
    <Router>
    <Routes>
    <Route path= '/' element={<Navigate to= '/LandingPage'/>}/>
    <Route path= '/landingpage' element={<LandingPage/>}/>
      
      <Route path='./bookingpage' element={<BookingsPage />} />
      
    </Routes>
  </Router>
  );
}

export default App;
