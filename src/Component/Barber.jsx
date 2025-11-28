import React from 'react'
import './Barber.css'
import { IoLogoWhatsapp,  IoCall , IoLogoTwitter, IoLogoFacebook } from "react-icons/io5";
const Barber = () => {
  return (
    <div className='barber'>
       <div className='barber-scissorr'>
        <img src="https://preview.colorlib.com/theme/hairsalone/assets/img/icon/scissors.svg" alt="" className='scissorr' />
        </div>

        <h1>
            Expert Team
        </h1>

        <div className="barb-con">
            <div className="barb1">
               <img src="https://preview.colorlib.com/theme/hairsalone/assets/img/gallery/team1.jpg" alt="" />
               
               <div className="barb-info">
                 <h3>Master Eric</h3>
                 <p>Head Barber</p>

                 <div className="loo">
                 <IoLogoWhatsapp color='white'/>
                 <IoCall color='white'/>
                 <IoLogoFacebook color='white'/>
                 <IoLogoTwitter color='white'/>
                 </div>
                 
               </div>
            </div>

            <div className="barb1">
               <img src="https://preview.colorlib.com/theme/hairsalone/assets/img/gallery/team2.jpg" alt="" />
               
               <div className="barb-info">
                 <h3>MR John Vianney</h3>
                 <p>Assistant Head Barber</p>

                 <div className="loo">
                 <IoLogoWhatsapp color='white'/>
                 <IoCall color='white'/>
                 <IoLogoFacebook color='white'/>
                 <IoLogoTwitter color='white'/>
                 </div>
                 
               </div>
            </div>

            <div className="barb1">
               <img src="https://preview.colorlib.com/theme/hairsalone/assets/img/gallery/team3.jpg" alt="" />
               
               <div className="barb-info">
                 <h3>Obodozie Ndunaka</h3>
                 <p>Intern Student</p>

                 <div className="loo">
                 <IoLogoWhatsapp color='white'/>
                 <IoCall color='white'/>
                 <IoLogoFacebook color='white'/>
                 <IoLogoTwitter color='white'/>
                 </div>
                 
               </div>
            </div>
      </div>

      
    </div>
  )
}

export default Barber
