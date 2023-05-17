import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import './index.scss'
import { store } from './store/store'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
