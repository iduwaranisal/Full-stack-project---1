import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Cardetails from './pages/Cardetails';
import Car from './pages/Car';
import Mybookings from './pages/Mybookings';

const App = () => {
  const [showLogin, setShowLogin] = useState(false)
  const isOwnerPath = useLocation().pathname.startsWith('/owner')

  return (
    <>
      {!isOwnerPath && <Navbar setShowLogin={setShowLogin} />}

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/car-details/:id' element={<Cardetails />} />
        <Route path='/cars' element={<Car />} />
        <Route path='/my-bookings' element={<Mybookings />} />
      </Routes>

    </>
  )
}

export default App
