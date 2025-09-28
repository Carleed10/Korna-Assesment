import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import HomeLayout from './Layouts/HomeLayout.jsx'
import HomePage from './Pages/HomePage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HomeLayout>
      <HomePage/>
    </HomeLayout>

    {/* <App /> */}
  </StrictMode>,
)
