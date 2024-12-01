import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import AuthPage from './pages/AuthPage.jsx'
import ProfilePage from './pages/ProfilePage.jsx'
import ChatPage from './pages/ChatPage.jsx'
import { useAuthStore } from './store/useAuthStore.js'
import App from './App.jsx'



createRoot(document.getElementById('root')).render(


  <StrictMode>
    <BrowserRouter>
    <App />    

    </BrowserRouter>
  </StrictMode>,
)
