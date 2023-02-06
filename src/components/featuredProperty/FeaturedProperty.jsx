import React from 'react'
import gn from "../../images/pexels-max-vakhtbovych-6284232.jpg";
import gb from "../../images/reisetopia-pSDe7ePo0Tc-unsplash.jpg"
import gh from "../../images/pexels-andrew-jones-10366176.jpg"
import gd from "../../images/mark-champs-Id2IIl1jOB0-unsplash.jpg"
import "./FeaturedProperty.css"

const FeaturedProperty = () => {
  return (
    <div className="fp">
        <div className="fpItem">
        <img className="fpImg" src={gn} alt='' width={290} height={250} />
        <span className="fpName">Aparthotel Stare Miasto</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">$120 <span className="fb">/night</span></span>
        <div className="fpRating">
            <button>8.9</button>
            <span>Excellent</span>
        </div>
        </div>
        <div className="fpItem">
        <img className="fpImg" src={gb} alt='' width={290} height={250} />
        <span className="fpName">Aparthotel Stare Miasto</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">$120 <span className="fb">/night</span></span>
        <div className="fpRating">
            <button>8.9</button>
            <span>Excellent</span>
        </div>
        </div>
        <div className="fpItem">
        <img className="fpImg" src={gh} alt='' width={290} height={250} />
        <span className="fpName">Aparthotel Stare Miasto</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">$120 <span className="fb">/night</span></span>
        <div className="fpRating">
            <button>8.9</button>
            <span>Excellent</span>
        </div>
        </div>
        <div className="fpItem">
        <img className="fpImg" src={gd} alt='' width={290} height={250} />
        <span className="fpName">Aparthotel Stare Miasto</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">$120 <span className="fb">/night</span></span>
        <div className="fpRating">
            <button>8.9</button>
            <span>Excellent</span>
        </div>
        </div>
    </div>
  )
}

export default FeaturedProperty