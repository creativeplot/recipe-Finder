import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import About from './pages/About.tsx'
import './rOutput.css'
import { RecipesProvider } from './context/RecipesContext.tsx'
import { BrowserRouter as Router, Routes, Route } from "react-router"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RecipesProvider>
      <Router>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>
    </RecipesProvider>
  </StrictMode>,
)
