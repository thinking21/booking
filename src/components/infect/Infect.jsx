import React from 'react'
import "./Infect.css"
import trew from "../../images/luggage.png"
import trea from "../../images/room-services.png";
import treb from "../../images/key-room.png";
import trec from "../../images/woman.png";

const Infect = () => {
  return (
    <div className="hihi">
        <div>
            <div className="kioa">
                <img src={treb} alt='' width={70}  />
                <div className="tmr">
                    <h5 className="smr">Smart Key</h5>
                    <p className='gyce'>Lorem ipsum dolor</p>
                </div>
            </div>

        </div>
        <div className="kioa">
            <img src={trea} alt='' width={80}  />
            <div className="tmr">
                    <h5 className="smr">Room Service</h5>
                    <p className='gyce'>Lorem ipsum dolor</p>
                </div>
        </div>
        <div className="kioa">
            <img src={trew} alt='' width={80}  />
            <div className="tmr">
                    <h5 className="smr">Store Luggage</h5>
                    <p className='gyce'>Lorem ipsum dolor</p>
                </div>
        </div>
        <div className="kioa">
            <img src={trec} alt='' width={70}  />
            <div className="tmrr">
                    <h5 className="smr">Disinfection</h5>
                    <p className='gyce'>Lorem ipsum dolor</p>
                </div>
        </div>
    </div>
  )
}

export default Infect