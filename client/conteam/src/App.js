import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom' 
import MainPage from './page/MainPage/MainPage'
import RecruitPage from './page/RecruitPage/RecruitPage'
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/" element={<RecruitPage/>} />
      
      </Routes>
    </BrowserRouter>
  )
}
