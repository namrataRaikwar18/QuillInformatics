import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { SearchModalProvider } from './context/searchModalContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SearchModalProvider>
        <App />
      </SearchModalProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
