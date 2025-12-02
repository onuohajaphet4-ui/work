import React , {useEffect, useState} from 'react'
import axios from 'axios'
import './Admin.css'
import Nav from '../Component/Nav'
import Foot from '../Component/Footer'
const Adim = () => {
    const [user, setUser] = useState([])
    const [loading , setLoading] = useState(true)

    //Fetch all booking
    const fetchUser = async () => {
        setLoading(true)
        try {
            const res = await 
            fetch ("https://yati-backend.onrender.com/api/users/all")
            const data = await res.json ()
            setUser(data.data)

            console.log(data)
        } catch (error) {
            console.error (error)
        }finally{
            setLoading(false)
        }
    }

    //delete user 
    const deleteUser = async (_id) =>{

           const confirm = window.confirm('Are you sure want to delete this user?')
   if (!confirm) return;
   
   try {
      await axios.delete (`https://yati-backend.onrender.com/api/users/all/${_id}`)
      console.log(data)
   } catch (error) {
    console.error(error)
    alert ('deleted succesfully')
    
   }
    }

    useEffect(() => {
        fetchUser ()
    }, [])

  return (
    <div>

         <div className="ba">
       <img src="https://d2gt4h1eeousrn.cloudfront.net/121245002/header-fcHJMd/DclbFT3-200x200.webp"  className='hero-img' alt="" />
         <Nav/> 
      </div>
     

        <h1 className='eric'>Hi Mr Eric , Welcome to the  Admin dashbord</h1>

        <p className='ffp'>Monitor and manage your booking here</p>

        <button onClick={fetchUser}  className='eric-b'>Refresh</button>
         
         {loading ? (
            <p>Loading ....</p>
         ) : user.length === 0 ? (
            <p>No Record Found</p>
         ): (

            <div className="admin-flex">
                {user.map((u) => (  

                   <div className='admin-card' key ={u._id}> 

                   <h4>Name: {u.name}</h4>
                   <h4>PhoneNumber: {u.phone}</h4>
                   <h4>Service: {u.service}</h4>
                   <h4>Barber: {u.barber}</h4>
                   <h4>Address: {u.address}</h4>
                   <h4>Payment Mode: {u.payment}</h4>
                   <h4>Date: {u.date}</h4>
                   <h4>Time: {u.time}</h4>
                   

                   <button  onClick={() => deleteUser(u._id)}>Delete</button>
                   
                    </div>
                     ))}
            </div>          
            
         )}

          <Foot/>

    </div>
  )
}

export default Adim
