import React from 'react'
import Fake from '../Component/FakeNav'
import './Normal.css'
import {Link} from 'react-router-dom'
export  const table = [
      {  
         id:1,
         service:' Regular Haircut ' ,
         price:'#2000 (2k)' , 
         info:'see info' , 
         button:'Book Now',
         category: 'Adult',
         time:'30mins'
      },
      {  id:2,
         service:' Kids Haircut ' ,
         price:'#1500 (1/5k)' , 
         info:'see info' , 
         button:'Book Now',
         category: 'Kids',
         time:'30mins'
      },
      {
         id:3,
         service:'Lines Up & Beard Trim ' ,
         price:'#1000 (1k)' , 
         info:'see info' , 
         button:'Book Now',
         category: 'Adult',
         time:'10mins'
      },
      {
         id:4,
         service:' Regular Haircut and Treatment ' ,
         price:'#5000 (5k)' , 
         info:'see info' , 
         button:'Book Now',
          category: 'Adult',
         time:'50mins'
      },
      {
         id:5,
         service:'Hair Black Dyeing/Wash /Conditioning ' ,
         price:'#6000 (6k)' , 
         info:'see info' , 
         button:'Book Now',
          category: 'Adult/Kids',
         time:'30mins'
      },
      {
         id:6,
         service:'Breads Dyeing/Wash /Conditioning ' ,
         price:'#5000 (5k)' , 
         info:'see info' , 
         button:'Book Now',
          category: 'Adult',
         time:'20mins'
      },
      {
         id:7,
         service:'Hair Colored Dyeing /Wash /Conditioning ' ,
         price:'#9000 (9k)' , 
         info:'see info' , 
         button:'Book Now',
           category: 'Adult/Kids',
         time:'30mins'
      },
      {
         id:8,
         service:'Loc Colored Dyeing /Wash /Conditioning ' ,
         price:'#12000 (12k)' , 
         info:'see info' , 
         button:'Book Now',
         category: 'Adult',
         time:'1hour'
      },
      {
         id:9,
         service:' Retwisting Of Locs ' ,
         price:'#13000 (13k)' , 
         info:'see info' , 
         button:'Book Now',
         category: 'Adult',
         time:'3hours'
      },{
         id:10,
         service:'Full Hair Treatment ' ,
         price:'#7000 (7k)' , 
         info:'see info' , 
         button:'Book Now',
          category: 'Adult/Kids',
         time:'1/5hour'
      },
   ]

const Normal = () => {

 
  return (
    <div className='normal'>

     

     <h2>
        Experience ERIC’s classic in-shop service 
        — where precision, comfort, and style come together to give you the perfect look.
     </h2>

     <hr  style={{  marginTop:'20px' , padding:'1px' ,background:'black' , marginRight:'54%'}}/>

     <div className="price">
        <h1>
            Our Services
        </h1>

         <p>
            Quality grooming, clear prices.
             Pick your service style — shop or home — and enjoy the same ERIC standard.
        </p>
     </div>
    
    <div className="table-flex">
     {table.map(table => (< div className="table">
       <div className="nn">
        <h4>{table.service}</h4>


        <p>{table.price}</p>
        </div>

       <Link to= {`/detail/${table.id}`}> <button>{table.button}</button></Link>
                
       
      </div>
        ))}
      </div>
    </div>
  )
}

export default Normal
