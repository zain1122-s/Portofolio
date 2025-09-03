import React from 'react'
import './port.scss';

function Port() {
  return (
    <div className="port">
        <h1 style={{fontSize:"3rem"}}>latest  <span style={{color:"#50dfe9"} }>Project</span></h1>
        <div className="port-1">
           <div className='port-1-1'>
            <div className="prj1">
                <img  src="https://i.pinimg.com/236x/0e/07/80/0e0780cec5095b930a6e5043d683ec03.jpg" className='img1' alt="" />
                <div className='intro'>
                  <h1>Dashbord</h1>
                  <p>If You Like the project I build. You can <br /> hair me on fiverr Link is on Home Screen <br /> Thank's 🥰</p>
                </div>
            </div>
            <div className="prj2"></div>
            <div className="prj3"></div>
           </div>
           <div className='port-1-2'>
            <div className="prj4"></div>
            <div className="prj5"></div>
           </div>
        </div>
    </div>
  )
}

export default Port;
