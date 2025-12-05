import React  from 'react'
// import Busy from '../Component/Busy'
import {Link} from 'react-router-dom'
export  const tabl = [
      {
        id:11,
         service:' Regular Haircut ' ,
         price:'#5000 (5k)' , 
         info:'see info' , 
         button:'Book Now',
         category: 'Adult',
         time:'30mins'
      },
      {
        id:12,
         service:' Kids Haircut ' ,
         price:'#3000 (3k)' , 
         info:'see info' , 
         button:'Book Now',
         category: 'Kids',
         time:'30mins'
      },
      {
        id:13,
         service:'Lines Up & Beard Trim ' ,
         price:'3000 (3k)' , 
         info:'see info' , 
         button:'Book Now',
         category: 'Adult',
         time:'10mins'
      },
      {
        id:14,
         service:' Regular Haircut and Treatment ' ,
         price:'#8000 (8k)' , 
         info:'see info' , 
         button:'Book Now',
         category: 'Adult',
         time:'50mins'
      },
      {
        id:5,
         service:'Hair Black Dyeing/Wash /Conditioning ' ,
         price:'#11000 (11k)' , 
         info:'see info' , 
         button:'Book Now',
         category: 'Adult/Kids',
         time:'30mins'
      },
      {
        id:16,
         service:'Breads Dyeing/Wash /Conditioning ' ,
         price:'#8000 (8k)' , 
         info:'see info' , 
         button:'Book Now',
         category: 'Adult',
         time:'20mins'
      },
      {
        id:17,
         service:'Hair Colored Dyeing /Wash /Conditioning ' ,
         price:'#14000 (14k)' , 
         info:'see info' , 
         button:'Book Now',
         category: 'Adult/Kids',
         time:'30mins'
      },
      {
        id:18,
         service:'Loc Colored Dyeing /Wash /Conditioning ' ,
         price:'#16000 (16k)' , 
         info:'see info' , 
         button:'Book Now',
         category: 'Adult',
         time:'1hour'
      },
      {
        id:19,
         service:' Retwisting Of Locs ' ,
         price:'#18000 (18k)' , 
         info:'see info' , 
         button:'Book Now',
         category: 'Adult',
         time:'3hours'
      },{
        id:20,
         service:'Full Hair Treatment ' ,
         price:'#12000 (12k)' , 
         info:'see info' , 
         button:'Book Now',
         category: 'Adult/Kids',
         time:'1/5hour'
      },
   ]


const Home = () => {
  return (
    <div className='normal'>

      {/* <Busy/> */}
     
      <h2>Enjoy ERIC’s premium grooming in the comfort 
        of your home — same skill, same quality, delivered right to your doorstep.
     </h2>

      <hr  style={{  marginTop:'20px' , padding:'1px' ,background:'black' ,  marginRight:'54%' }}/>
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
     {tabl.map(tabl => (< div className="table">
       <div className="nn">
        <h4>{tabl.service}</h4>


        <p>{tabl.price}</p>
        </div>
       
       <Link to= {`/detail/${tabl.id}`}> <button>{tabl.button}</button></Link>
                
       
      </div>
        ))}
      </div>
    </div>
  )
}

export default Home
