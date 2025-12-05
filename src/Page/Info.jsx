import React from 'react'
import Nav from '../Component/Nav'
import Barber from '../Component/Barber'
import Testi from '../Component/Tesstimonial'
import Map from '../Component/Map'
import Foot from '../Component/Footer'
import Contact from '../Component/Contact'
import './Info.css'
import {motion} from 'framer-motion'
import { IoCall, IoLocation, IoTimeOutline } from "react-icons/io5";
import {Link} from 'react-router-dom'
import img3 from '../assets/img3.jpg'
import log from '../assets/loo.jpg'


const Info = () => {
  return (
    <div className='info'>
     <div className="ba">
       <img src={log}  className='hero-img' alt="" />
         <Nav/> 
      </div>
     
     <div className="info-hero">
       <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            > 
         <h1>
          About Us
         </h1> 

         <h4>
          A modern barbershop dedicated to clean fades, sharp details, and quality service.
         </h4>
       </motion.div>
       <motion.div
                  initial={{ opacity: 0, x: -50, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  
        > 

      <div className="black">
        <div className="black1">

          <div className="bl-flex">
           <IoCall size={25}/>
          <a href="tel:=08145990289"> 08140685213</a>
          </div>

          <p>
            Call us 24/7 we will get back <br />
             to you ASAP 
          </p>


        </div>

        <div className="black1">

          <div className="bl-flex">
           <IoLocation size={25}/>
           Site & Service
          </div>

          <p>
            267 base  Site and service , New Owerri <br />
            Owerri Imo state
          </p>


        </div>

        <div className="black1">

          <div className="bl-flex">
           <IoTimeOutline size={25}/>
           Daily: 8 am - 10 pm
          </div>

          <p>
            Mon-Fri, Saturday <br />
            Sunday: Closed
          </p>


        </div>
       </div>
       </motion.div>
     </div>


     <div className="about">
     
           
      <img src={img3} alt="" />
       
       <div className="infoma">
        <h1>Our Story</h1>

        <p>We started our journey with one goal: to bring quality grooming and modern style to everyone 
          who walks through our doors. Over the years, our passion for clean cuts, sharp details, and great
           service has shaped the barbershop we are today.
        </p>

        <p><span>Opening Hours</span>: 10:00 am - 10:00 pm</p>

        <Link to='/book'> <button>Book An Appointment</button></Link>
       </div>
     </div>

     <Barber/>
     
     <Testi/>
     
     <Map/>
     <Contact/>
     <Foot/>

     
    </div>
  )
}

export default Info
