import React from 'react'
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom' 
import MainPage from './page/MainPage/MainPage'
import RecruitPage from './page/RecruitPage/RecruitPage'
import TeamPage from './page/TeamPage/TeamPage'
import TeamEditPage from './page/TeamEditPage/TeamEditPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<MainPage/>} />
      <Route path="/team-edit" element={<TeamEditPage/>} />
        <Route path="/recruit" element={<RecruitPage/>} />
        <Route path="/team" element={<TeamPage/>} />
      </Routes>
    </BrowserRouter>
  )
}
