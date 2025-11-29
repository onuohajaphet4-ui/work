// import React , {useState} from 'react'
import React , { useRef , useState } from 'react'
import './Form.css'
import emailjs from '@emailjs/browser'
import {CircularProgress} from '@mui/material'

const Form = () => {
    const[open , setOpen] = useState(false)

     const [loading, setLoading] = useState(false);
      const form = useRef () 

      const convertTo12 = (time24) => {
        let [hour, minute] = 
        time24.split (":")
        hour = parseInt (hour)

        const ampm = hour >= 12 ? "PM" : "AM"
        hour = hour % 12 || 12

        return `${hour}:${minute} ${ampm}`
      }

    
      const sendEmail = (e) => {
        e.preventDefault() ;
         setLoading(true)

         const formData = new 
         FormData(form.current)
         const time24 = formData.get("time")

         if (time24){
          const time12 =
          convertTo12(time24)
         }

        emailjs 
        .sendForm(
          'service_f4ymrpo',
          'template_79gqmnv',
          form.current,
           'yQcrPxg3PWJmvSr8a'
        )
        .then(
          (result) => {
            console.log (result.text)
            alert('Your Meassage has been sent and will be review, expect our reply soon')
            setLoading(false);
          },
          (error) => {
            console.log(error.text)
            alert('Error sending message')
          }
         
          
       
        )
      }
        
  return (
    <div>
          

         <div  className="mmenu">
                <button 
                onClick={() => setOpen(!open)} style={{
                  
                  
               
                }}
                 >
                    Booking Info
                </button>
        </div>

      <div className={`ovelay ${open ? "show" : ""}`} />
      
               <div className={`mobiile-nav ${open ? "show" : ""}`}>
      
                 <form action="" className='formm' ref={form} onSubmit={sendEmail} >
                     <h1>
                     Fill Your Booking Form
                        </h1>

                        <button  className='bul' onClick={() =>setOpen(false)}>close</button>
                      
                      <div className="diii">
                        
                       <input type="date" name='date' placeholder='Date' required   /> 
                      
                         
                        <br /> <br />
                        <input type="time" name='time' placeholder='Enter Email' required /> 
                      </div>
                      
      
                      
      
                      <div className="diii">
                      
                       <select name="service"  > 
               
                       <option value="Choose Your Service">Choose Your Service</option>
                       <option value="Regular Haircut">Regular Haircut</option>
                       <option value="Kids Haircut">Kids Haircut</option>
                       <option value="Lines Up & Beard Trim">Lines Up & Beard Trim</option>
                       <option value="Regular Haircut and Treatment"> Regular Haircut and Treatment</option>
                       <option value="Hair Black Dyeing/Wash /Conditioning">Hair Black Dyeing/Wash /Conditioning </option>
                       <option value="Breads Dyeing/Wash /Conditioning ">Breads Dyeing/Wash /Conditioning </option>
                       <option value="Hair Colored Dyeing /Wash /Conditioning">Hair Colored Dyeing /Wash /Conditioning</option>
                       <option value="Loc Colored Dyeing /Wash /Conditioning">Loc Colored Dyeing /Wash /Conditioning</option>
                       <option value="Retwisting Of Locs ">  Retwisting Of Locs  </option>
                       <option value=" Full Hair Treatment "> Full Hair Treatment   </option>
                  required
                  </select>
      
                       <br /> <br />
                      <select name="barber" >
               
                       <option value="">Choose Your Barber</option>
                       <option value="Master Eric">Master Eric</option>
                       <option value="MR John Vianney">MR John Vianney</option>
                       <option value="Obodozie Ndunaka">Obodozie Ndunaka</option>
                       required
                     </select> 
                      </div>
                      
                     
                      <div className="diii">
                       
                       <input type="text" name='name' placeholder='Name'  required  /> 
      
                       <br /> <br />
                       
                       <select name="payment" >
               
                       <option value="">Payment Mode</option>
                       <option value="Pay Physically">Pay Physically</option>
                       <option value="Online payment">Online payment (Name should align with name in form)</option>
                      
                       
                       required
                     </select> 
                      </div>

                       <div className="diii">
                       
                       <input type="text" name='phone' placeholder='Enter Phone Number'  required  /> 
      
                       <br /> <br />
                       <input type="text" name='address' placeholder='Enter Addrress (incase of Home service) '   /> 
                      </div>
      
                      <h4>
                        By submitting, you agree to our <span>Privacy Policy</span>
                      </h4>
      
                      <button className='form-butt'  type='submit'>
                        {loading ? (
                                   <CircularProgress size={24} sx={{ color: "#fff" }} />
                                  ) : (
                                    "Submitt"
                                  )}
                      </button>
      
      
      
      
                    </form>
      
                 
              </div>
    </div>
  )
}

export default Form
