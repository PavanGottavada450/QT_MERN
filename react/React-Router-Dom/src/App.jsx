import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Product from './pages/Product'
import { Routes, Route } from 'react-router-dom'
import About from './pages/About'
import ContactLayout from './layout/ContactLayout'
import Contactinfo from './components/Contactinfo'
import ConatctFrom from './components/ConatctFrom'
import NotFound from './components/NotFound'
import JobsLayout from './layout/JobsLayout'
import Jobs, { jobsLoader } from './pages/Jobs'


function App() {
  return (
    <div>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/product' element={<Product/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<ContactLayout/>} >
            <Route path='info' element={<Contactinfo/>}/>
            <Route path='form' element={<ConatctFrom />}/>
          </Route>
          <Route path='jobs' element={<JobsLayout/>}>
              <Route index element={<Jobs />} loader={jobsLoader}/>
          </Route>
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </div>

    </div>
  )
}

export default App