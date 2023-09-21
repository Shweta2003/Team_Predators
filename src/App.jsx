import React from 'react'
import {
  Homepage,
  Contact,
  Partners,
  Achievements,
  IndividualP
} from './pages'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Moments from './pages/Moments'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/achievements' element={<Achievements />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/partners' element={<Partners />} />
        <Route path='/partners/:id' element={<IndividualP/>} />
        <Route path='/moments' element={<Moments/>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App