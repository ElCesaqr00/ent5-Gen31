import './App.css'
import { Routes, Route } from "react-router-dom"
import HomePage from './pages/HomePage'
import PodekexPage from './pages/PodekexPage'
import PokemonInfoPage from './pages/PokemonInfoPage'
import ProtectedRoutes from './pages/ProtectedRoutes'

function App() {


  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route element={<ProtectedRoutes />}> 
      <Route path="/pokedex" element={<PodekexPage />} />
      <Route path="/pokedex/:id" element={<PokemonInfoPage />} />
      </Route>
    </Routes>
    </>
  )
}

export default App
