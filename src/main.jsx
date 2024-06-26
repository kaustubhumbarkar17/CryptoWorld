import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router,Route } from 'react-router-dom'
import 'antd/dist/reset.css'
import { Provider } from 'react-redux'
import store from './app/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router >
      <Provider store={store}>
        <App/>
      </Provider>
    </Router>
  
  </React.StrictMode>,
)
