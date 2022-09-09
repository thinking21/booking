import React, { useLayoutEffect } from 'react'
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
        <div className="testimonials">
        <h5 className="htmi">Testimonials</h5>
            <h2 className="ino">What Our Guests Says</h2>
            <p className="inbv">We take pride in serving our guests with the best experience.</p>
            <div className="testimonial-pic">
                <img src={fe} className="user-pic active-pic"  />
                <img src={fr} className="user-pic"/>
                <img src={fw} className="user-pic"/>
                <img src={fq} className="user-pic"/>
                <img src={fy} className="user-pic"/>
                <img src={fu} className="user-pic"/>
            </div>
            <div className="testimonial-text">
                <div className="user-text active-text">
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est enim sequi sunt quis excepturi
                        nostrum modi eligendi distinctio animi facere dicta nam omnis ut non, aut ea ullam repudiandae natus!
                    </p>
                    <span>Miya / Developer</span>
                </div>
                <div className="user-text">
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est enim sequi sunt quis excepturi
                        nostrum modi eligendi distinctio animi facere dicta nam omnis ut non, aut ea ullam repudiandae natus!
                    </p>
                    <span>Miya / Developer</span>
                </div>
                <div className="user-text">
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est enim sequi sunt quis excepturi
                        nostrum modi eligendi distinctio animi facere dicta nam omnis ut non, aut ea ullam repudiandae natus!
                    </p>
                    <span>Miya / Developer</span>
                </div>
                <div className="user-text">
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est enim sequi sunt quis excepturi
                        nostrum modi eligendi distinctio animi facere dicta nam omnis ut non, aut ea ullam repudiandae natus!
                    </p>
                    <span>Miya / Developer</span>
                </div>
                <div className="user-text">
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est enim sequi sunt quis excepturi
                        nostrum modi eligendi distinctio animi facere dicta nam omnis ut non, aut ea ullam repudiandae natus!
                    </p>
                    <span>Miya / Developer</span>
                </div>
                <div className="user-text">
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est enim sequi sunt quis excepturi
                        nostrum modi eligendi distinctio animi facere dicta nam omnis ut non, aut ea ullam repudiandae natus!
                    </p>
                    <span>Miya / Developer</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonial