import React from 'react'
import './Intract.scss'
function Intreact() {
  return (
    <div className='intract'>
      <h1 style={{color:"white", fontSize:"3rem", alignItems:"center"}}>Contect <span style={{color:" #50dfe9"}}>Me</span></h1>
      <div className="form">
        <input type="text" placeholder=' your Name'/>
        <input type="email"  placeholder=' Your Email'/>
        <input type="text" placeholder='subject' />
        <input type="text" placeholder='message' className='message' />
        <div className="butn">
          <button className='bttn'>Send Message</button>
        </div>
      </div>
    </div>
  )
}

export default Intreact
