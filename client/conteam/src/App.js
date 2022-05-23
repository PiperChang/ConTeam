import React from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import MainPage from './page/MainPage/MainPage'
import RecruitPage from './page/RecruitPage/RecruitPage'

import TeamListPage from './page/TeamListPage/TeamListPage'
import EditTeamInfoPage from './page/EditTeamPage/EditTeamInfoPage'
import PreviewPage from './page/EditTeamPage/PreviewPage'
import EditContentInfoPage from './page/EditTeamPage/EditContentInfoPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/team-edit-preview" element={<PreviewPage />} />
        <Route path="/team-edit" element={<EditTeamInfoPage />} />
        <Route path="/team-edit-2" element={<EditContentInfoPage />} />
        <Route path="/recruit" element={<RecruitPage />} />
        <Route path="/team-list" element={<TeamListPage />} />
      </Routes>
    </BrowserRouter>
  )
}
