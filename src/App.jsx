import { useState } from 'react'
import HomePage from './Page/HomePage'
import WorkPage from './Page/WorkPage'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Route, Routes} from 'react-router-dom'

function App() {

  Aos.init({
    duration: 1800,
    offset: 0,
  })

  return (
    <Routes>
    
      
      <Route path='/' element={<HomePage/>}/>
      <Route path='/work' element={<WorkPage/>}/>

     
     
    </Routes>
   
   
  )
}

export default App
