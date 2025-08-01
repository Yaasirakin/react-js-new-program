import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './components/ThemeContext.js'
createRoot(document.getElementById('root')).render(
  <StrictMode>
          <ThemeProvider>
            <App />
          </ThemeProvider>
    
  </StrictMode>,
)
