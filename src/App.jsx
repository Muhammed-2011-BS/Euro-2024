import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import Matches from './pages/Matches'
import ErrorPage from './pages/ErrorPage'


function App() {

  return (
    <>
    <Routes >
      <Route path='/' element={<Layout />}>
        <Route path="/"  element={<HomePage />} />
        <Route path="/matches"  element={<Matches />} />
      </Route>
      <Route path="/*" element={<ErrorPage />} />
    </Routes>

    </>
  )
}

export default App
