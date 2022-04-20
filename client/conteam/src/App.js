import React from 'react'
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom' 
import MainPage from './page/MainPage/MainPage'
import RecruitPage from './page/RecruitPage/RecruitPage'
import UserPage from './page/UserPage/UserPage'



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/recruit" element={<RecruitPage/>} />

        <Route path="/user" element={<UserPage/>} />

      </Routes>
    </BrowserRouter>
  )
}
