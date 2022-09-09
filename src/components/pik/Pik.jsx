import React from 'react'
import Countdowntimer from '../countdowntimer/Countdowntimer';
import "./Pik.css";

const Pik = () => {
  return (
    <div className="bge">
        <h3 className="jiji">Escape with weekly hotel deals</h3>
        <h5 className="tota">Time Left to Book</h5>
        <Countdowntimer  countdownTimestamp={1673673600000}/>
        <h3 className="totb">Check new deals every 6 months</h3>
        <button className='btca'>Book Now</button>
    </div>
  )
}

export default Pik