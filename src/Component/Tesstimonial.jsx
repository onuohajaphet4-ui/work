import React from 'react'
import {motion} from 'framer-motion'
import './Testi.css'
import {  IoPeople} from "react-icons/io5";
const Testi = () => {
      const reviews = [
    
    {
       id: 2 ,
      name: "Eze J.",
      review: "Clean cute, sharp lining, annd great service . Best barbershop experience i've had in a long time.",
      rating: 4,
    },
    {
       id: 3 ,
      name: "Umar S.",
      review: "Professonal,friendly , and they really know what they are doing!",
      rating: 5,
    },

  
  ];

  const revview =[
    {
       id: 4 ,
      name: "Aip Q.",
      review: "The attention to detail is crazy.I always leave with a perfect cut.",
      rating: 4,
    },
    { id: 5 ,
      name: "John Vianney.",
      review: " Fast,neat , and affordable.My new go-to barbershop.",
      rating: 4,
    },
   
  ]

  return (

     <motion.div
         initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
    >

    
    <div className="testi-container">
      <p className='japhet'>Testiominial</p>
      <h1>
        Dont take our words for it! <br />
        Hear it from our customers
      </h1>

      
   <div className="word">

    <h2 className="testi-title">Word of praise from others about our good work</h2>
    <div className="row left-row">
      <div className="testi-wrapper">
        {reviews.map((item, index) => (
          <div id= {item.id} key={index} className="testi-card">
            < IoPeople size={40}/>
            <div className="testi-name">{item.name}</div>
            <p className="testi-text">{item.review}</p>
            <div className="testi-stars">
              {"⭐".repeat(item.rating)}{"☆".repeat(5 - item.rating)}
            </div>
            
          </div>
        ))}

        


      </div>
    </div>


    <div className=" row right-row"  style={{paddingTop:'20px'}} >
      <div className="testi-wrapper">
        {revview.map((item, index) => (
          <div key={'bottom-' + index} className="testi-card">
            < IoPeople size={40}/>
            <div className="testi-name">{item.name}</div>
            <p className="testi-text">{item.review}</p>
            <div className="testi-stars">
              {"⭐".repeat(item.rating)}{"☆".repeat(5 - item.rating)}
            </div>
            
          </div>
        ))}

         


      </div>
    </div>


    
      </div>

      <h6 className='jjj'>
        jjjjj
      </h6>
    </div>
  


      <div className="iconn">
                       <a href="https://wa.me/2347074293026"><ion-icon name="logo-whatsApp" style={{color:'black'}}></ion-icon></a>
                       <hr />
                        <a href="tel:=08145990289"><ion-icon name="call-outline" style={{color:'black' }}></ion-icon></a>
      </div>



          
         
    
        </motion.div>

    
  )
}

export default Testi
