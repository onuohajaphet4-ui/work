// import React from 'react'
import React  from 'react'
import {table} from '../Page/Normal'
import {tabl} from '../Page/Home'
import { useParams } from "react-router-dom";
import './Detail.css'
import Nav from '../Component/Nav'
import Foot from '../Component/Footer'
import {Link} from 'react-router-dom'
import Form from '../Component/Form'

const Details = () => {
     const all = [
    ...table, ...tabl]

    const { id } = useParams();

    const book = all.find(item => item.id === Number(id));

  

 
  return (
    <div style={{backgroundColor:'#f5f5f5'}}>

        <div className="ba ">
                  <img src="https://d2gt4h1eeousrn.cloudfront.net/121245002/header-fcHJMd/DclbFT3-200x200.webp"  className='hero-img' alt="" />
                  <Nav/> 
        </div>

    <div className='detail'>

        <h2>Booking Info</h2>

        <Form/>

     <h4>
        This item/service provides a reliable and convenient solution for customers looking for purpose.
         Designed to deliver value, it ensures quality, efficiency, and a satisfying user experience.
      </h4>


      <div className="v">

        <div>
     <h1 style={{ marginBottom: "10px" }}> Service: {book.service}</h1>

     {book.price && (
        <p style={{ lineHeight: "1.6", fontSize: "19px", maxWidth: "500px" }}>
          price to pay : {book.price}
        </p>
        
       
      )}
      </div>

      <div>

      <h5>
        Details
      </h5>

      <ul>
        {book.category && (<li className='l1'>Category:{book.category} </li>)}
        {book.time && (<li className='l2'>Derution:{book.time} </li>)}
        {book.category &&(<li className='l3'>Sutiable :{book.category}</li>)}
        <li className='l4'>What to expect:Luxury and Premium Style </li>
      </ul>
      </div>
    </div>


    <h5>
        Note:
    </h5>

     <p style={{fontSize: "19px"}}>
       
        Availability may vary based on schedule, demand, or selected options.
     </p>



     <div className="dlex">
       <button
        onClick={() => window.history.back()}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          background: "#111",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer"
        }}
      >
        Go Back
      </button>



      
      <button
       
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          background: "#111",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer"
        }}
      >
       <Link to='/pay' style={{color :'inherit' , textDecoration:'none'}}>Click To Pay</Link>
      </button>


      </div>

      
    </div>

    <Foot/>
    </div>
  )
}

export default Details
