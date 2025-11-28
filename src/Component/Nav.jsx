import React , {useState} from 'react'
import './Nav.css'
import {FiMenu } from "react-icons/fi"
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'

const Nav = () => {
  const[open , setOpen] = useState(false)

  return (
    <div className='main'>
      <nav>

        
      
      {/* Dextop */}
      <div className="nav">
        <ul className='main-ul'>
         <Link to='/' style={{textDecoration:'none' , color:'inherit'}}><li>Home</li></Link> 
         <Link to='/gallary' style={{textDecoration:'none' , color:'inherit'}}><li>Gallery</li></Link> 
         <Link to='/info' style={{textDecoration:'none' , color:'inherit'}}><li>Shop Info</li></Link> 
         <Link to='/book' style={{textDecoration:'none' , color:'inherit'}}><li>Booking Info</li></Link> 
        </ul>
         
      </div>

      {/* mobile ham */}
        <div  className="menu" onClick={() => setOpen(!open)}>
        <FiMenu size={28} color='white'/>

         

        </div>

      <div className={`overlay ${open ? "show" : ""}`} />

      {/* Mobile */}
     <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className={`mobile-nav ${open ? "show" : ""}`}>

         <ul  onClick={() =>setOpen(false)}>
           <Link to='/' style={{textDecoration:'none' , color:'inherit'}}><li>Home</li></Link>
          <Link to='/gallary' style={{textDecoration:'none' , color:'inherit'}}><li>Gallery</li></Link>
          <Link to='/info' style={{textDecoration:'none' , color:'inherit'}}><li>Shop Info</li></Link>
          <Link to='/book' style={{textDecoration:'none' , color:'inherit'}}><li>Booking Info</li></Link>
         </ul> 
        </div>
      </motion.div>
         
      </nav>
      
    </div>
  )
}

export default Nav
