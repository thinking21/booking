import React, { useState } from 'react'
import "./Pagnition.css";
import data from "./Data.jsx";
import {TbBath} from "react-icons/tb"
import {MdOutlineKingBed} from "react-icons/md"
import {BsDisplay} from 'react-icons/bs'
import {BiExpand} from "react-icons/bi"

const imagePerRow = 6;
export const Pagnition = ({cardData}) => {

    const [noOfElement, setnoOfElement] = useState(imagePerRow);
    const loadMore = () => {
        setnoOfElement(noOfElement + imagePerRow);
    }


  return (
    <div>
    <div className="card-con">
        {data.cardData?.slice(0, noOfElement)?.map((item, index)=>{
            return(
                <div className="jo" key={index}>
                    <div className="image-con">
                        <img className="hv" src={item.img} alt=''/>
                    </div>
                    <div className="card-ti">
                        <h3 className="jj">{item.title}</h3>
                    </div>
                    <div className="card-bo">
                        <span className="tt"><TbBath color='white'/><span className="ss">&ensp;&ensp;1 Baths</span></span>
                        <span className="tt"><MdOutlineKingBed color='white' size={17.5}/><span className="ss">&ensp;&ensp;Queen Bed</span></span>
                        <span className="tt"><BsDisplay color='white'/><span className="ss">&ensp;&ensp;1 Television</span></span>
                        <span className="tt"><BiExpand color='white'/><span className="ss">&ensp;&ensp;980 Sq.Ft</span></span>
                    </div>
                </div>
                )
        })}

    </div>
    {noOfElement < data.cardData?.length && (
    <button className="btb" onClick={() => loadMore()}>See More</button> 
    )}

    </div>
  )
}

export default Pagnition