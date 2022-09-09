import React,{useEffect, useState} from 'react'
import "./Countdowntimer.css";
import {getRemaingTimeUntilTimeStamp} from "./CountdownTimerUtil"

const defaultRemaingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00'
}


const Countdowntimer = ({countdownTimestamp}) => {
    const [remaingTime, setRemaingTime] = useState(defaultRemaingTime);

    useEffect(() => {
        const intervalId =  setInterval(() => {
            updateRemaingTime(countdownTimestamp);
        }, 1000);
        return () => clearTimeout(intervalId);
    },[countdownTimestamp]);

    function updateRemaingTime(countdown) {
       setRemaingTime(getRemaingTimeUntilTimeStamp(countdown));
    }
    
  return (
    <div className="appm">
        <div className="countdown">
            <div className="fkfe">
                <span>{remaingTime.days}</span>
                <div className="okos">
                    <span className="dret">Days</span>
                </div>  
            </div>
            <div className="ta">:</div>
            <div className="fkfa">
                <span className='twonumber'>{remaingTime.hours}</span>
                <div className="okoa">
                    <span className="dret">Hours</span>
                </div>  
            </div>
            <div className="ta">:</div>
            <div className="fkfb">
                <span className='twonumber'>{remaingTime.minutes}</span>
                <div className="okob">
                    <span className="dret">Minutes</span>
                </div>  
            </div>
            <div className="ta">:</div>
            <div className="fkfc">
            <span className='twonumber'>{remaingTime.seconds}</span>
                <div className="okoc">
                    <span className="dret">Seconds</span>
                </div>  
            </div>
        </div>
    </div>
  )
}

export default Countdowntimer