import React from 'react'
import "./Gallery.css"
import hoho from "../../images/wa.jpeg";
import fofo from "../../images/wb.jpeg";
import yolo from "../../images/wr.jpeg";
import goko from "../../images/wi.jpeg";
import joeo from "../../images/wq.webp";
import dowo from "../../images/wh.webp";
import uoao from "../../images/wm.jpeg";

const Gallery = () => {
  return (
    <div className="ga">
        <div className="vfa">
            <h5 className="htm">Hotel Gallery</h5>
            <h1 className="htsk">Feast Your Eyes</h1>
            <p className="gycw">
              Quisque sollicitudin, nunc sit amet ullamcorper lobortis, 
              lorem ante vehicula felis, non elementum dui magna nec leo.
              Quisque et sapien metus. Fusce sodales mauris a ligula aliquet tincidunt. 
              Sed congue enim at tellus ullamcorper commodo quis eget dui.
            </p>
            <button className="btq">Check Now</button> 
        </div>
        <div className="ta">
        <div className="masonry">
          <div className="item">
            <img src={hoho} alt='' className="hoyo" />
          </div>
          <div className="item">
            <img src={fofo} alt='' className="foyo" />
          </div>
          <div className="item">
            <img src={yolo} alt='' />
          </div>
          <div className="item">
            <img src={joeo} alt='' />
          </div>
          <div className="item">
            <img src={goko} alt='' />
          </div>
          <div className="item">
            <img src={dowo} alt='' className="doyo" />
          </div>
          <div className="item">
            <img src={uoao} alt='' className="uoyo" />
          </div>
        </div>
        </div>
        
    </div>
  )
}

export default Gallery