import React from 'react'
import "./Benefit.css"
import ve from '../../images/10811.jpg'
import df from '../../images/keycard1.png';
import qq from '../../images/check-in-desk.png'
import se from '../../images/key-card.png'

const Benefit = () => {
  return (
    <div>
      <h2 className="bd">What we can do for you</h2>
      <p className="bm">Benefits of Booking Directly with Our Hotel</p>
    <div className="fom">
        <div>
            <img className='ds' src={ve} alt='' />
        </div>
        <div className="vv">
          <div>
            <img className="cc" src={df} alt='' width={60} height={60} />
            <h3 className="wh">Bookings Benefits</h3>
            <p className="kk">During the booking process through the hotel website, not only can you find stays, but also full experiences to live with your family, couple or, why not, on your own.</p>
          </div>
          <div>
            <img className="cc" src={qq} alt='' width={60} height={60} />
            <h3 className="wh">Organized Benefits</h3>
            <p className="kk">The hotel staff who manage the bookings is always attentive to every guest’s needs and has everything perfectly well organized on guests’ arrivals.</p>
          </div>
          <div>
            <img className="cc" src={se} alt='' width={60} height={60} />
            <h3 className="wh">Secure and simple</h3>
            <p className="kk">A Holiday Lettings listing gives you a secure and easy way to take bookings and payments online.</p>
          </div>
          </div>
    </div>
    </div>
  )
}

export default Benefit