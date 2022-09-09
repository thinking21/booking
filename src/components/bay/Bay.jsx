import React from 'react'
import "./Bay.css"
import txe from "../../images/hall.jpg"
import hxe from "../../images/iot.png";
import tgtg from "../../images/123.jpeg";

const Bay = () => {
  return (
    <div className="sectionh">
      <div>
        <img src={txe} alt='' width={450} height={590}/>
      </div>
      <div className="opoj">
        <h5 className="htx">Hotel Bayview</h5>
        <div className="bgt">
        <h1 className="hty">Relax in our</h1>
        <h1 className="htu">Hotel Resort</h1>
        </div>
        <div className="nkuu">
            <div className="hio">
              <p className="gyc">Quisque eu euismod arcu. Morbi et dapibus diam, sed interdum velit. Proin tempor nunc vel nisl condimentum, nec tempor risus.</p>
              <p className="gyv">Quisque eu euismod arcu. Morbi et dapibus diam, sed interdum velit. Proin tempor nunc vel nisl condimentum, nec tempor risus.</p>
              <div className="dew">
                <div>
                <img className="dert" src={tgtg} alt='' width={70} height={70} />
                </div>
                <div className="qzw">
                  <div className='qsw'>Sai ThuKha</div>
                  <div className='qaw'>Hotel Manager</div>
                </div>
              </div>
              
            </div>
            <div className="hieq">
            <p className="gyc">Curabitur a fringilla eros. Pellentesque eu interdum nulla. Pellentesque porttitor dui nec leo condimentum, et euismod mi mollis.</p>
              <p className="gyv">Curabitur a fringilla eros. Pellentesque eu interdum nulla. Pellentesque porttitor dui nec leo condimentum, et euismod mi mollis.</p>
              <img className="cece" src={hxe} alt='' width={240} height={50} />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Bay