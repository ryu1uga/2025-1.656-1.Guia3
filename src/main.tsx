import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MenuPage from './pages/MenuPage'
import LibrosPage from './pages/LibrosPage'
import VideojuegosPage from './pages/VideojuegosPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <MenuPage /> } />
        <Route path="/libros" element={ <LibrosPage /> } />
        <Route path="/videojuegos" element={ <VideojuegosPage /> } />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)