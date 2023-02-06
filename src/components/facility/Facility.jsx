
import "./Facility.css";
import vre from "../../images/via.jpeg"
import vew from "../../images/vio.jpeg";
import {BiMessageSquareCheck} from "react-icons/bi"

import Infect from '../infect/Infect';

const Facility = () => {
    
  return (
    <div>
        <div className="fac">
        <div>
            <div className="viyy">
                <img className="made" src={vre} alt='' width={290} height={450} />
                <div className="jike">
                    <h5 className="hbr">23</h5>
                    <h5 className="htw">Rooms</h5>
                    <h5 className="hbr">12</h5>
                    <h5 className="htw">Suites</h5>
                    <h5 className="hbr">24</h5>
                    <h5 className="htw">H / 24</h5>
                </div>
                <img className="mafe" src={vew} alt='' width={290} height={450} />
            </div>
        </div>
        <div>
        <h5 className="htm">Hotel Facilities</h5>
        <h1 className="hts">The Structure</h1>
        <p className="gyce">
            Quisque sollicitudin, nunc sit amet ullamcorper lobortis, 
            lorem ante vehicula felis, non elementum dui magna nec leo.
            Quisque et sapien metus. Fusce sodales mauris a ligula aliquet tincidunt. 
            Sed congue enim at tellus ullamcorper commodo quis eget dui.
        </p>
        <div className="gg">
            <div>
                <ul>
                <BiMessageSquareCheck color='#4682B4' size={19}/> <span className="dea">Premium Bedding</span>
                </ul>
                <ul>
                <BiMessageSquareCheck color='#4682B4' size={19}/> <span className="dea">Champagne Bar</span>
                </ul>
                <ul>
                <BiMessageSquareCheck color='#4682B4' size={19}/> <span className="dea">Laundry & Iconing</span>
                </ul>
            </div>
            <div>
            <ul>
                <BiMessageSquareCheck color='#4682B4' size={19}/> <span className="dea">Mini-fridge</span>
                </ul>
                <ul>
                <BiMessageSquareCheck color='#4682B4' size={19}/> <span className="dea">Hair Styling Tools</span>
                </ul>
                <ul>
                <BiMessageSquareCheck color='#4682B4' size={19}/> <span className="dea">24-Hour Guest Reception</span>
                </ul>
            </div>
        </div>
        </div>
    </div>
    <Infect />
    </div>
    
    
  )
}

export default Facility