import React from 'react'
import Fake from '../Component/FakeNav'
import Nav from '../Component/Nav'
import log from '../assets/loo.jpg'

const Info = () => {
  return (
    <div>

        <div className="ba">
          <img src={log}  className='hero-img' alt="" />
          <Nav/> 
        </div>

        <Fake/>

        


     
    </div>
  )
}

export default Info
