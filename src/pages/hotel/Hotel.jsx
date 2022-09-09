import React from 'react'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import {MdOutlineLocationOn} from "react-icons/md"
import "./Hotel.css"
import Footer from "../../components/footer/Footer"
import { useState } from 'react'
import {BiXCircle} from "react-icons/bi"
import {FiArrowLeftCircle} from "react-icons/fi"
import {FiArrowRightCircle} from "react-icons/fi"

const Hotel = () => {

  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      img: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/316ef8151910201.6314c67d0ec2e.png"
    },
    {
      img: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/ed22c8151910201.6314c67d0fc3b.png"
    },
    {
      img: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/0c10dd151910201.6314c67d1064f.png"
    },
    {
      img: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/31fdf9151910201.6314c67d0f17a.png"
    },
    {
      img: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/e6a191151910201.6314c67d0f6f7.png"
    },
    {
      img: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/fa770c151910201.6314c67d1013f.png"
    },
  ];

  const handleOpen = (i)=>{
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) =>{
    let newSlideNumber;

    if(direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    }else{
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  return (
    <div>
      <Navbar />
      <Header/>
      <div className="hotelContainer">
        {open && <div className="slider">
          <BiXCircle className="close" onClick={()=> setOpen(false)} />
          <FiArrowLeftCircle className="arrow" onClick={()=> handleMove("l")}/>
            <div className="sliderWrapper">
                <img src={photos[slideNumber].img} alt="" className="sliderImg" />
            </div>
          <FiArrowRightCircle className="arrow" onClick={()=> handleMove("r")}/>  
        </div>}
        <div className="hotelWrapper">
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <MdOutlineLocationOn />
            <span>Elton St 125 New York</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo,i)=>( 
              <div className="hotelImgWrapper">
                  <img onClick={()=>handleOpen(i)} src={photo.img} alt="" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
              <div className="hotelDetailsTexts">
                <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
                <p className="hotelDesc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, dolore,
                  suscipit dicta quas deserunt numquam earum accusantium iusto id dignissimos 
                  fuga magni ratione cumque, accusamus a omnis mollitia! Adipisci, maiores!
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, dolore,
                  suscipit dicta quas deserunt numquam earum accusantium iusto id dignissimos 
                  fuga magni ratione cumque, accusamus a omnis mollitia! Adipisci, maiores!
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, dolore,
                  suscipit dicta quas deserunt numquam earum accusantium iusto id dignissimos 
                  fuga magni ratione cumque, accusamus a omnis mollitia! Adipisci, maiores!
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, dolore,
                  suscipit dicta quas deserunt numquam earum accusantium iusto id dignissimos 
                  fuga magni ratione cumque, accusamus a omnis mollitia! Adipisci, maiores!
                </p>
              </div>
              <div className="hotelDetailsPrice">
                <h1 className="hotelPer">Perfect for a 9-night stay!</h1>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, dolore,
                  suscipit dicta quas deserunt numquam earum!
                </span>
                <h2>
                  <b>€945</b><small className="nine"> (9 nights)</small> 
                </h2>
                <button>Reserve or Book Now!</button>
              </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Hotel