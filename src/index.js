import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { SearchModalProvider } from './context/searchModalContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <SearchModalProvider>
      <App />
    </SearchModalProvider>
  </React.StrictMode>,
)
