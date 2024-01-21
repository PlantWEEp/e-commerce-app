import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Header from './components/navabar/Header' 
import Footer from './components/navabar/Footer'
import Home from './pages/Home'
import ProductPage from './pages/ProductPage'
import Dashboard from './admin/Dashboard'


function App() {
  const location =useLocation()
  const isAdminRoute = location.pathname.startsWith("/admin");
  
  return (
    <>

        {!isAdminRoute && <Header />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/product' element={<ProductPage/>} />
          <Route path='/admin/dashboard' element={<Dashboard/>} />

        </Routes>
        {!isAdminRoute && <Footer/>}
    </>
  )
}

export default App
