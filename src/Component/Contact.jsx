import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <div className='contact'>
       <div className="form">
        <h1>Contact US</h1>

        <input type="text" name="" id=""  placeholder='Name'/> <br />

        <input type="text"  placeholder='Email or Phonenumber'/> <br />

        <input type="text" placeholder='Message' /> <br />

        <p>I’m available for commissions and collaborations, and i’m
           excited to hear from you about new projects.
        </p>

        <button>Submit</button>
       </div>

       <div className="infoo">
         <h2>Visit our studio at</h2>
         <p>282 base , site & service , new oweri <br />owerri imo state </p>
         <h2>Message us</h2>
         <p>Onuohajaphet@gnail.com <br /> 0028922892828</p>
         

         <h2>Working Hours</h2>
         <p>Monday - Friday  : 09.00 - 23.00 <br /> Sunday           : 09.00 - 16.00s</p>
         
       </div>
    </div>
  )
}

export default Contact
