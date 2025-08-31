import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

import AuthProvider from 'react-auth-kit'

import createStore from 'react-auth-kit/createStore'

const store = createStore({
  authName:'_auth',
  authType:'localstorage',
  cookieDomain: window.location.hostname,
  cookieSecure: window.location.protocol === 'https:',
 
  
})


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <AuthProvider  store={store}  fallbackPath='/login'>
    <App/>
    </AuthProvider>
      </BrowserRouter>
  </StrictMode>,
)
