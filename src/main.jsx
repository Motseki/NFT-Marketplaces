import React from 'react'
import ReactDOM from 'react-dom/client'
import { MetaMaskProvider } from "metamask-react";
import App from './App'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MetaMaskProvider>
        <App />
    </MetaMaskProvider>
  </React.StrictMode>,
)
