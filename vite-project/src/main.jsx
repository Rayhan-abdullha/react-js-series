import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import UseContext from './context/useContext'
import { BrowserRouter } from "react-router";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <UseContext>
      <App />
    </UseContext>
    </BrowserRouter>
  </StrictMode>,
)
