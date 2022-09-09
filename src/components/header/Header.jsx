import React from 'react'
import {FaBed} from 'react-icons/fa'
import {FaTaxi} from 'react-icons/fa'
import {FaHotel} from 'react-icons/fa'
import {FaCar} from 'react-icons/fa'
import "./Header.css"

function Header() {
  return (
    <div className="header">
        <div className="headerContainer">
        <div className="headerList">
            <div className="headerListItem active">
                <FaBed />
                <span>Stays</span>
            </div>
            <div className="headerListItem">
                <FaCar />
                <span>Car Rentals</span>
            </div>
            <div className="headerListItem">
                <FaHotel />
                <span>Attractions</span>
            </div>
            <div className="headerListItem">
                <FaTaxi />
                <span>Airport Taxi</span>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Header