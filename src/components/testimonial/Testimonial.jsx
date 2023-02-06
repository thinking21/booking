
import React, { Fragment, useLayoutEffect, useState } from 'react'

import "./Testimonial.css"
import fq from "../../images/gim.jpeg";
import fw from "../../images/gin.jpeg";
import fe from "../../images/gio.jpeg";
import fr from "../../images/gix.jpeg";
import fy from "../../images/giz.jpeg";
import fu from "../../images/gik.jpeg";
import { useRef } from 'react';
import scrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';

const Testimonial = () => {


    const [toggleTab, setToggleTab] = useState(1);

    const toggleState = (index) => {
        setToggleTab(index);
    }

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
        };
    }, [])

  return (
    <div ref={ref} className="containert">
        <Fragment>
        <div className="testimonials">
        <h5 className="htmi">Testimonials</h5>
            <h2 className="ino">What Our Guests Says</h2>
            <p className="inbv">We take pride in serving our guests with the best experience.</p>
            <div className="testimonial-pic">
                <img src={fe} className={toggleTab === 1 ? "user-pic active-pic" : "user-pic"} onClick = {() => toggleState(1)}  />
                <img src={fr} className={toggleTab === 2 ? "user-pic active-pic" : "user-pic"} onClick = {() => toggleState(2)}/>
                <img src={fw} className={toggleTab === 3 ? "user-pic active-pic" : "user-pic"} onClick = {() => toggleState(3)}/>
                <img src={fq} className={toggleTab === 4 ? "user-pic active-pic" : "user-pic"} onClick = {() => toggleState(4)}/>
                <img src={fy} className={toggleTab === 5 ? "user-pic active-pic" : "user-pic"} onClick = {() => toggleState(5)}/>
                <img src={fu} className={toggleTab === 6 ? "user-pic active-pic" : "user-pic"} onClick = {() => toggleState(6)}/>
            </div>
            <div className="testimonial-text">
                <div className={toggleTab === 1 ? "user-text active-text" : "user-text"}>
                    <p className="ips">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est enim sequi sunt quis excepturi
                        nostrum modi eligendi distinctio animi facere dicta nam omnis ut non, aut ea ullam repudiandae natus!
                    </p>
                    <span className="ips">Miya / Developer</span>
                </div>
                <div className={toggleTab === 2 ? "user-text active-text" : "user-text"}>
                    <p className="ips">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est enim sequi sunt quis excepturi
                        nostrum modi eligendi distinctio animi facere dicta nam omnis ut non, aut ea ullam repudiandae natus!
                    </p>
                    <span className="ips">Yuri / Developer</span>
                </div>
                <div className={toggleTab === 3 ? "user-text active-text" : "user-text"}>
                    <p className="ips">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est enim sequi sunt quis excepturi
                        nostrum modi eligendi distinctio animi facere dicta nam omnis ut non, aut ea ullam repudiandae natus!
                    </p>
                    <span className="ips">Mina / Developer</span>
                </div>
                <div className={toggleTab === 4 ? "user-text active-text" : "user-text"}>
                    <p className="ips">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est enim sequi sunt quis excepturi
                        nostrum modi eligendi distinctio animi facere dicta nam omnis ut non, aut ea ullam repudiandae natus!
                    </p>
                    <span className="ips">Yuna / Developer</span>
                </div>
                <div className={toggleTab === 5 ? "user-text active-text" : "user-text"}>
                    <p className="ips">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est enim sequi sunt quis excepturi
                        nostrum modi eligendi distinctio animi facere dicta nam omnis ut non, aut ea ullam repudiandae natus!
                    </p>
                    <span className="ips">Momo / Developer</span>
                </div>
                <div className={toggleTab === 6 ? "user-text active-text" : "user-text"}>
                    <p className="ips">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est enim sequi sunt quis excepturi
                        nostrum modi eligendi distinctio animi facere dicta nam omnis ut non, aut ea ullam repudiandae natus!
                    </p>
                    <span className="ips">Sana / Developer</span>
                </div>
            </div>
        </div>
        </Fragment>
    </div>
  )
}

export default Testimonial