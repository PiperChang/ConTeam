import React from 'react'
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom' 
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
