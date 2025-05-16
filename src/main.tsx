import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './rOutput.css'
import { RecipesProvider } from './context/RecipesContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RecipesProvider>
      <App />
    </RecipesProvider>
  </StrictMode>,
)
