import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import LandingPage from './component/LandingPage'
import BookingsPage from './component/BookingPage';
import './App.css';
import Header from './component/Header';

function App() {
  return (
    <Router>
      <Header/>
    <Routes>
    <Route path= '/' element={<LandingPage/>}/>
    <Route path= '/landingpage' element={<LandingPage/>}/>
      
      <Route path='./bookingpage' element={<BookingsPage />} />
      
    </Routes>
  </Router>
  );
}

export default App;
