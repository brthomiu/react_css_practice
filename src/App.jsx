import  { React } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Home from './pages/Home'
import Art from './pages/Art'
import MobileHeader from './components/header/MobileHeader'

const App = () => {



    return (
  
      <Router>
  
        <Header />
        <MobileHeader />

        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/art' element={<Art />} />
        </Routes>

      </Router>
  
    )
  }
  
  export default App