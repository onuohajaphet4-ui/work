import React , {useState}from 'react'
import './FakeNav.css'
// import { useState } from 'react'
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'
import Norm from '../Page/Normal'
import Home from '../Page/Home'
import Foot from '../Component/Footer'

const FakeNav = () => {
    const [activeTab, setActiveTab] = useState ('service')
  return (

    <div className="fakemain">
        <motion.div
                      initial={{ opacity: 0, y: 30, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
        > 

        <h1 className='h1'>Welcome to ERIC — where style meets comfort. </h1>

        <p className='p'>
           Choose how you’d like to enjoy our services: <br /> visit us in-store for the classic
           barbershop experience or let us bring ERIC’s touch right to your home.
        </p>
     <div className='fake'>
       <h3 className={`tab ${activeTab === "service" ? "active" : ""}`} onClick={() => setActiveTab('service')}> Normal Service</h3>
        <h3 className={`tabb ${activeTab === "home" ? "active" : ""}`} onClick={() => setActiveTab('home')}> Home Service </h3>
     </div>


     <div className="tabbb">
       {activeTab === 'service' && <Norm/>}
       {activeTab === 'home' && <Home/>}
     </div>
      </motion.div>

      <Foot/>
    </div>
  )
}

export default FakeNav
