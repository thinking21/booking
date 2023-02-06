import React from 'react'
import "./Kid.css"
import joe from "../../images/pet-hotel-signal.png";
import joi from "../../images/car-parking.png";
import jop from "../../images/crib.png";

const Kid = () => {
  return (
    <div className="zxcv">
    <div className="kifd">
        <img className="sryy" src={joe} alt='' width={70} height={70} />
        <div className="onon">
            <h2>Pet-friendly Rooms</h2>
            <p className="ngt">Curabitur a fringilla eros. Pellentesque eu interdum nulla. 
                Pellentesque porttitor dui nec leo condimentum, et euismod mi mollis.
            </p>
        </div>
        <img className="sryy" src={joi} alt='' width={60} height={55} />
        <div className="onon">
            <h2>Free Parking</h2>
            <p className="ngt">Curabitur a fringilla eros. Pellentesque eu interdum nulla. 
                Pellentesque porttitor dui nec leo condimentum, et euismod mi mollis.
            </p>
        </div>
        <img className="sryy" src={jop} alt='' width={60} height={55} />
        <div className="onon">
            <h2>Cribs & Cots for Kids</h2>
            <p className="ngt">Curabitur a fringilla eros. Pellentesque eu interdum nulla. 
                Pellentesque porttitor dui nec leo condimentum, et euismod mi mollis.
            </p>
        </div>
    </div>
    </div>
  )
}

export default Kid