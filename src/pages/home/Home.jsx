import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Start from '../../components/start/Start'
import Featured from '../../components/featured/Featured'
import './Home.css'
import PropertyList from '../../components/property/PropertyList'
import FeaturedProperty from '../../components/featuredProperty/FeaturedProperty'
import Rooms from '../../components/rooms/Rooms'
import Price from '../../components/price/Price'
import Testimonial from '../../components/testimonial/Testimonial'
import Bay from '../../components/bay/Bay'
import Events from '../../components/events/Events'
import Gallery from '../../components/gallery/Gallery'
import Kid from '../../components/kid/Kid'
import Check from '../../components/check/Check'
import Pik from '../../components/pik/Pik'
import Facility from '../../components/facility/Facility'
import { Extra } from '../../components/extra/Extra'
import News from '../../components/news/News'
import Book from '../../components/book/Book'
import Footer from '../../components/footer/Footer'
import Copy from '../../components/copy/Copy'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>  
      <Start/>
      <Featured />
      <Bay />
      <Events />
      <Kid />
      <Check />
      <div className="homeContainer">
        <h2 className="homeTitle">Browse by property type</h2>
        <p className="mop">Serving travelers with every purpose, taste and budget. As they research and plan, we help them narrow to confidently book the perfect place to stay.</p>
        <PropertyList />
        <h2 className="homeTitle">Home Guests Love</h2>
        <p className='lk'>Popular Places to stay that Home Guests Loved.</p>
        <FeaturedProperty />
      </div>
      <Pik />
      <Facility />
      <Extra />
      <Rooms />
      <Price />
      <Testimonial />
      <Gallery />
      <News />
      <Book />
      <Footer />
      <Copy />
    </div>
  )
}

export default Home