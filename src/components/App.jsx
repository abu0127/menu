import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Burgers from './pages/Burgers';
import Pizzas from './pages/Pizzas';
import Menu from './pages/Menu';
import Header from './Header';

function AppContent() {
  const location = useLocation();

  return (
    <>
    <Header/>
      {location.pathname === '/' && <Menu />}
      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/burgers" element={<Burgers />} />
        <Route path="/pizzas" element={<Pizzas />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;