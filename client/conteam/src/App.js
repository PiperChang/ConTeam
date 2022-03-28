import React from 'react'
import {BrowserRouter, Router, Routes, Link, Route} from 'react-router-dom' 
import MainPage from './page/MainPage/MainPage'
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Router /> */}
        {/* <Router /> */}
        <Route path="/" element={ <MainPage /> }/>
      </Routes>
    </BrowserRouter>
  )
}
