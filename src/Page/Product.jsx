import React from 'react'
import Nav from '../Component/Nav'
import Foot from '../Component/Footer'
import './Product.css'
import {motion} from 'framer-motion'
const Info = () => {

  const gallery = [
    {
      img: 'https://i.pinimg.com/736x/14/65/ed/1465edfb124a2407eed5f82da33c7279.jpg'
    }, {
      img: 'https://i.pinimg.com/1200x/af/29/dd/af29ddec6573c1a6aadbc46df483ec9e.jpg'
    }, {
      img: 'https://i.pinimg.com/736x/94/8b/11/948b11e05545c9d37cfd9068465b3fe6.jpg'
    }, {
      img: 'https://i.pinimg.com/1200x/36/19/84/361984e46c9875221f75b00144552096.jpg'
    }, {
      img: 'https://i.pinimg.com/736x/8b/7d/6d/8b7d6daa81993fa08921df22c4aec411.jpg'
    }, {
      img: 'https://i.pinimg.com/1200x/06/12/0d/06120d1e38235a53e279e10801a9de2e.jpg'
    }, {
      img: 'https://i.pinimg.com/736x/b3/21/fd/b321fd37dd9d39c8ea767f3e0d71fe14.jpg'
    }, {
      img: 'https://i.pinimg.com/736x/54/b5/1d/54b51dff0f6a246e0da13c215bbdd902.jpg'
    }, {
      img: 'https://i.pinimg.com/736x/2c/b3/a2/2cb3a2007f766642d9e32fdefe5e2464.jpg'
    }, {
      img: 'https://i.pinimg.com/1200x/96/17/a4/9617a4d32a9fb128f2b5e960d93fbf49.jpg'
    },
    {
      img: 'https://i.pinimg.com/1200x/0d/01/1c/0d011c79a3fbcd071fa5ffc7983c2113.jpg'
    }, {
      img: 'https://i.pinimg.com/736x/cc/2e/14/cc2e142301776f178aca7a23b488b31d.jpg'
    }, {
      img: 'https://i.pinimg.com/736x/39/28/bc/3928bc29266fcef6c4537a31bc9e644d.jpg'
    }, {
      img: 'https://i.pinimg.com/1200x/e0/7b/78/e07b7861971331e8fd5250bad123405b.jpg'
    }, {
      img: 'https://i.pinimg.com/1200x/16/84/c3/1684c380d1d5fe572947598661f41770.jpg'
    }, {
      img: 'https://i.pinimg.com/736x/86/89/70/86897063fd03c3d9e40dc00c724c9436.jpg'
    }, {
      img: 'https://i.pinimg.com/736x/49/68/8f/49688fe1efb279cc71f6d6fa63310723.jpg'
    },
    {
      img:'https://i.pinimg.com/1200x/97/bf/2d/97bf2dae60b10996d45a18f715802155.jpg'
    }
  ]
  return (
    <div className='gallery'>
        <div className="ba">
       <img src="https://d2gt4h1eeousrn.cloudfront.net/121245002/header-fcHJMd/DclbFT3-200x200.webp"  className='hero-img' alt="" />
         <Nav/> 
      </div>

      <h1>
        Yati Models
      </h1>
     
       <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            > 


      <div className="gal">
        {gallery.map(gallery => (
          <div className="gal-card">
            <img src={gallery.img} alt="" />
          </div>
         ))}
      </div>

       </motion.div>

      <Foot/>
    </div>
  )
}

export default Info
