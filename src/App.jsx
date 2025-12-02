import { useState } from 'react'
import {Route,Routes} from 'react-router-dom'
import './App.css'
// import Nav from './Component/Nav'
import Home from './Page/Hom'
import Hom from './Page/Home'
import  Norm from './Page/Normal'
import Gallary from './Page/Product'
import Info from './Page/Info'
import Book from './Page/Book'
import Detail from './Page/Details'
import Pay from './Component/Pay'
import Form from './Component/Form'
import Contact from './Component/Contact'
import Login from './Page/Login'
import Admin from './Page/Adim'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    {/* <Nav/> */}

    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='dmin' element={<Admin/>} />
      <Route path='/log' element={<Login/>} />
      <Route path='/form' element={<Form/>} />
      <Route path='/con' element={<Contact/>} />
      <Route path='/pay' element={<Pay/>} />
      
      <Route path='/home' element={<Hom/>} />
      <Route path='/normal' element={<Norm/>} />
      <Route path='/book' element={<Book/>} />
      <Route path='/gallary' element={<Gallary/>} />
      <Route path='/info' element={<Info/>} />
       <Route path='/detail/:id' element = {<Detail/>} />
       
    </Routes>
     
    </>
  )
}

export default App
