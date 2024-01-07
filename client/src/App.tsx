import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/navabar/Header' 
import Footer from './components/navabar/Footer'
import Home from './components/pages/Home'
import ProductPage from './components/pages/ProductPage'

function App() {
  return (
    <>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/product' element={<ProductPage/>} />
        </Routes>
      <Footer />
    </>
  )
}

export default App
