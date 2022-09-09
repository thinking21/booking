import React, { useLayoutEffect } from 'react'
import "./Extra.css";
import { useRef } from 'react';
import scrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import gsgs from "../../images/call.png";
import {VscCheck} from "react-icons/vsc"
import {VscChromeClose} from "react-icons/vsc";

export const Extra = () => {
    const ref = useRef(null);
    gsap.registerPlugin(scrollTrigger);
    useLayoutEffect(()=>{
        let element = ref.current;

        scrollTrigger.create({
            trigger: element,
            start: 'top top',
            end: 'bottom top',
            pin: true,
            pinSpacing: false,
            scrub: true,
        })

        return () =>{
            scrollTrigger.killAll();
        };
    }, [])
  return (
    <div ref={ref} className="inff">
        <div className='vty'>
            <h5 className="htm">Best Prices</h5>
            <h1 className="htss">Extra Services</h1>
            <p className="gyce">
            The best prices for your relaxing vacation. The utanislen quam nestibulum ac quame odion elementum sceisue the aucan.
            </p>
            <p className="gyce">
            Orci varius natoque penatibus et magnis disney parturient monte nascete ridiculus mus nellen etesque habitant morbine.
            </p>
            <div className='lettr'>
                <img src={gsgs} alt='' width={40} />
                <div>
                <h5 className="htqw">For Information</h5>
                <span className="bowl">855 100 4444</span>
                </div>
            </div>
        </div>
        <div className="contt">
            <div className="carda">
                <div className="carda-img e-1"></div>
                <div className="jujr">
                <h2 className="clea">Room Cleaning</h2>
                <p className="mona"><span className="dolla">$50</span> / month</p>
                <div className="vg">
                <div className="vsc">
                    <VscCheck color='#4682B4' size={19} />
                    <p className="duru">Hotel ut nisan the duru</p>
                </div>
                <div className="vsc">
                    <VscCheck color='#4682B4' size={19} />
                    <p className="duru">Orci miss natoque vasa ince</p>
                </div>
                <div >
                    <VscChromeClose color='#4682B4' size={19}/>
                    <p className="duru">Clean sorem ipsum morbin</p>
                </div>
                </div> 
                </div>
            </div>
            <div className="carda">
                <div className="carda-img e-2"></div>
                <div className="jujr">
                    <h2 className="clea">Drinks Included</h2>
                    <p className="mona"><span className="dolla">$30</span> / daily</p>
                    <div className="vg">
                    <div className="vsc">
                    <VscCheck color='#4682B4' size={19} />
                        <p className="duru">Hotel ut nisan the duru</p>
                    </div>
                    <div className="vsc">
                        <VscCheck color='#4682B4' size={19} />
                        <p className="duru">Orci miss natoque vasa ince</p>
                    </div>
                    <div>
                        <VscChromeClose color='#4682B4' size={19}/>
                        <p className="duru">Clean sorem ipsum morbin</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
