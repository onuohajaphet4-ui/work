import React from 'react'
import {Box} from '@mui/material'
import video from '../assets/vii.mp4'
import Nav from '../Component/Nav'
import Foot from '../Component/Footer'
import './Hom.css'
import hair from '../assets/hair.jpg'
import dye from '../assets/dye.jpg'
import dread from '../assets/dread.jpg'
import {Link} from 'react-router-dom'
import log from '../assets/loo.jpg'

const Info = () => {
  return (
  <div>
     <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        // backgroundColor:'white',
        backgroundSize: "cover",
        backgroundPosition: "center",
       background: 'linear-gradient (rgba(0,0,0,0.3))'
        
      }}
    >
 
 <div className='vid-wrapper'>
    <video
              autoPlay
              loop
              muted
              playsInline
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "90%",
                objectFit: "cover",
                zIndex: -1,
                backgroundColor: "rgba(0,0,0,0.65)", 
        }}
      >
        <source src={video} type="video/mp4" />
    </video>

      
  </div>

     <Link to='/log'><button  className='admmm'>Admin block</button></Link>

   <img src={log}  className='hero-img' alt="" />

    <Nav/>

      <img src={log}  className='hero-mg' alt="" />

      
    
    </Box>
      
    <div className='intro'>
      <h1>
        ERIC BARBERSHOP
      </h1>

    <Link to='/book'>  <button>Book Now</button></Link>
    </div>

    <div className="home-contan">
             <h1>Explore Style - Your Cut,Your Identity</h1>

             <div className="home-card">
                <div className="cardd">
                   <h2>Clean Fade.Sharp Beards.A Perfect Finish</h2>

                   <div className="cardd2">
                     <p>Get a smooth, clean fade paired with sharp beard grooming—crafted with precision to keep you looking fresh and confident everywhere you go.”.</p>
                     <img src= {hair} alt="" />
                   </div>

                   <Link to='/book'><button>Click to Book an Appointment</button> </Link>
                </div>

                 <div className="cardd">
                   <h2>Premium Color Treatments Designed to Elevate Your  Style</h2>

                   <div className="cardd2">
                     <p>Transform your style with vibrant, long-lasting hair color—carefully applied to match your personality, enhance your look, and give you a bold, confident finish.</p>
                     <img src={dye} alt="" />
                   </div>

                     <Link to='/book'><button>Click to Book an Appointment</button></Link>
                </div>


                <div className="cardd">
                   <h2>Deep Care. Healthy Roots. A Revitalized Look</h2>

                   <div className="cardd2">
                     <p> Experience deep nourishing treatments that repair damaged strands, strengthen your roots, and restore natural shine — giving your hair a healthier, revitalized glow.</p>
                     <img src="https://media.istockphoto.com/id/583997412/photo/dermatologist-checking-mole-on-man-in-clinic.jpg?s=1024x1024&w=is&k=20&c=SDARcQrnTGxLv0TNBr0WY9KQrvt89Vjb2uQDN5DTr6k=" alt="" />
                   </div>

                    <Link to='/book'><button>Click to Book an Appointment</button></Link>
                </div>

                <div className="cardd">
                   <h2>Neat Dreadlocks and Precision Retwists</h2>

                   <div className="cardd2">
                     <p> Keep your locs clean, refreshed, and perfectly maintained with expert retwisting that enhances your style and keeps your dreads looking sharp and healthy. </p>
                     <img src={dread} alt="" />
                   </div>

                    <Link to='/book'> <button>Click to Book an Appointment</button></Link>
                </div>

                 
             </div>
           </div>


           <Foot/>

    </div>
  )
}

export default Info
