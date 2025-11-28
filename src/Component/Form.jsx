import React , {useState} from 'react'
import './Form.css'
const Form = () => {
    const[open , setOpen] = useState(false)
        
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
      
                 <form action="" className='formm' >
                     <h1>
                     Fill Your Booking Form
                        </h1>

                        <button  className='bul' onClick={() =>setOpen(false)}>close</button>
                      
                      <div className="diii">
                        
                       <input type="date" name='name' placeholder='Date' required   /> 
                      
                         
                        <br /> <br />
                        <input type="time" name='email' placeholder='Enter Email' required /> 
                      </div>
                      
      
                      
      
                      <div className="diii">
                      
                       <select name="form" >
               
                       <option value="male">Choose Your Service</option>
                       <option value="female">Regular Haircut</option>
                       <option value="cat">Kids Haircut</option>
                       <option value="cat">Lines Up & Beard Trim</option>
                       <option value="cat"> Regular Haircut and Treatment</option>
                       <option value="cat">Hair Black Dyeing/Wash /Conditioning </option>
                       <option value="cat">Breads Dyeing/Wash /Conditioning </option>
                       <option value="cat">Hair Colored Dyeing /Wash /Conditioning</option>
                       <option value="cat">Loc Colored Dyeing /Wash /Conditioning</option>
                       <option value="cat">  Retwisting Of Locs  </option>
                       <option value="cat"> Full Hair Treatment   </option>
                  required
                  </select>
      
                       <br /> <br />
                      <select name="form" >
               
                       <option value="male">Choose Your Barber</option>
                       <option value="female">Master Eric</option>
                       <option value="cat">MR John Vianney</option>
                       <option value="cat">Obodozie Ndunaka</option>
                       required
                     </select> 
                      </div>
                      
                     
                      <div className="diii">
                       
                       <input type="text" name='phone' placeholder='Name'  required  /> 
      
                       <br /> <br />
                       
                       <select name="form" >
               
                       <option value="male">Payment Mode</option>
                       <option value="cat">Pay Physically</option>
                       <option value="female">Online payment (Name should align with name in form)</option>
                      
                       
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
                        Submit
                      </button>
      
      
      
      
                    </form>
      
                 
              </div>
    </div>
  )
}

export default Form
