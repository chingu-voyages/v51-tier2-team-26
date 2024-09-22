import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ExpenseDetail from './Components/ExpenseDetail.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ExpenseDetail />
  </StrictMode>,
)