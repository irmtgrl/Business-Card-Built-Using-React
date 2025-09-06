import { createRoot } from 'react-dom/client'
import './index.css'
import { Header, Main } from './App.jsx'

createRoot(document.getElementById('root')).render(
  <>
  <Header />
  <Main />
  </>
)
