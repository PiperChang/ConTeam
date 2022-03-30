import React from 'react'
<<<<<<< HEAD
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom' 
=======
import {BrowserRouter, Router, Routes, Link, Route} from 'react-router-dom' 
>>>>>>> feature/mainPage
import MainPage from './page/MainPage/MainPage'
import RecruitPage from './page/RecruitPage/RecruitPage'
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/recruit" element={<RecruitPage/>} />
      </Routes>
    </BrowserRouter>
  )
}
