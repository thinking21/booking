import React from 'react'
import "./Check.css";
import tgtg from "../../images/nway.jpeg";
import hxe from "../../images/uru.png";
import gyeq from "../../images/uru.avif";
import ewew from "../../images/spla.avif";
import swsw from "../../images/sppla.avif";
import ywyw from "../../images/spoy.jpeg";
import frfr from "../../images/sppok.avif";

const Check = () => {
  return (
    <div className="green">
        <div>
        <h5 className="htx">Best Summer Offers</h5>
        <div className="bgt">
        <h1 className="htyy">Check The</h1>
        <h1 className="htuu">Promotions</h1>
        <p className="gyc">Pellentesque maximus pharetra tristique. Vestibulum eget odio blandit, finibus felis non, efficitur diam. Sed condimentum pellentesque eros. Etiam posuere turpis in ultricies ullamcorper.</p>
        <div className="dew">
                <div>
                <img className="dert" src={tgtg} alt='' width={95} height={110} />
                </div>
                <img className="cece" src={hxe} alt='' width={180} height={70} />
              </div>
        </div>
        </div>
        <div>
            <img src={gyeq} alt='' width={400} height={600}/>
        </div>
        <div>
            <div className="pomo">
                <img alt='' src={swsw} width={100} height={90} />
                <div className="kjkj">
                    <h5 className="htx">One Week</h5>
                    <h3 className="smms">Small BedRoom</h3>
                </div>
                <div className="nens">$40</div>
            </div>
            <div className="pomo">
                <img alt='' src={ewew} width={100} height={90} />
                <div className="kjkj">
                    <h5 className="htx">One Week</h5>
                    <h3 className="smms">Apartment Room</h3>
                </div>
                <div className="nensa">$50</div>
            </div>
            <div className="pomo">
                <img alt='' src={ywyw} width={100} height={90} />
                <div className="kjkj">
                    <h5 className="htx">One Week</h5>
                    <h3 className="smms">Family Suite</h3>
                </div>
                <div className="nensb">$70</div>
            </div>
            <div className="pomo">
                <img alt='' src={frfr} width={100} height={90} />
                <div className="kjkj">
                    <h5 className="htx">One Week</h5>
                    <h3 className="smms">Twin BedRoom</h3>
                </div>
                <div className="nensc">$55</div>
            </div>
        </div>
    </div>
  )
}

export default Check