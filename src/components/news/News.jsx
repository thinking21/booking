import React from 'react'
import "./News.css";
import fefe from "../../images/qwe.jpeg";
import {IoMdQuote} from "react-icons/io"
import {TbUnlink} from "react-icons/tb"


const News = () => {
  return (
    <div>
        <h5 className="htmo">Hotel News & Events</h5>
        <h2 className="inoa">Stay Tuned</h2>
        <p className="inbvb">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci nisl, tempus ut sem a, </p>
        <p className="inbv">scelerisque sollicitudin arcu.</p>
        <div className="jgtz">
            <div className="carde">
              <div>
              <div className="carde-img e-9"></div>
                <div className="jujr">
                <h2 className="cleaz">Health Club</h2>
                <p className="ngte">The health club & pool at elit finibus viverra nec a lacus themo the nesudea seneoice
                  the ivite dianne onen nivami acsestion augue artine.
                </p>
                <button className="btqe">Learn More</button> 
                </div>
              </div>
                <div className="poiu">
                <h5 className="folom">www.PuzzleX.com</h5>
                <div className='svene'>
                <TbUnlink size={32} />
                </div>
                
                </div>
            </div>
            <div className="beer">
                <div className="veve">
                  <h5 className="folom">Follow Our Resort Luxury Hotels</h5>
                  <h5 className="htmy">PuzzleX Website</h5>
                  <div className="sven">
                    <IoMdQuote size={27} /> 
                  </div>
                  
                </div>
                <div className="cardef">
                <div className="carde-img e-10"></div>
                <div className="jujr">
                <h2 className="clea">New Website</h2>
                <p className="ngte">Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod orci utet.
                </p>
                <button className="btqe">Learn More</button> 
                </div>
                </div>
                
            </div>
            <div className="carded">
                <img src={fefe} alt='' width={375} height={470}/>
                <div className="noco">
                  
                </div>
                
            </div>
        </div>
    </div>
    
  )
}

export default News