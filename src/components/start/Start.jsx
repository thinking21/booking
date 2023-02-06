import React,{ useState } from 'react'
import "./Start.css"
import Image from '../../images/coleen-rivas-OZ2rS2zCjNo-unsplash.jpg';
import JI from '../../images/pexels-photo-3408353.jpeg';
import hi from '../../images/pexels-volker-meyer-9713059.jpg';
import {FaBed} from 'react-icons/fa'
import {BsCalendar2Week} from 'react-icons/bs'
import {VscPerson} from 'react-icons/vsc'
import {BsSearch} from 'react-icons/bs'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css';
import { format } from 'date-fns';
import {FiMinus} from 'react-icons/fi'
import {FiPlus} from 'react-icons/fi'
import { useNavigate } from 'react-router-dom';

const Start = () => {
    const [destination, setDestination] = useState("");
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: "selection",
        },
      ]);
      const [openOptions, setOpenOptions] = useState(false);
      const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
      });

      const navigate = useNavigate();

      const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === "i" ? options[name] + 1 : options[name] -1,
            };
        });
      };

      const handleSearch = ()=> {
        navigate("/hotels", { state: { destination, date, options } });
      };

  return (
    <div className="section">
    <div className="homes">
        <h1 className="pnu">Hotel, car & experiences</h1>
        <p>Accompanying us, you have a trip full of experiences. With PuzzleX, booking accommodation, resort villas, hotels</p>
        <button className="header-Btn">Search</button>
    </div>
    <div className="contain">
        <img className="fi" src={hi} height={260} width={260} alt=""/>
        <img className="go" src={Image} height={260} width={260} alt=""/>
        <img className="mati" src={JI} height={500} width={260} alt=""/>
    </div>
    <div className="headerSearch">
        <div className="headerSearchItem">
            <FaBed size={22} className="headerIcon"/>
            <input type="text" placeholder="Where are you going?" className="headerSearchInput" 
            onChange={e=>setDestination(e.target.value)}
            />
        </div>
        <div className="headerSearchItem">
            <BsCalendar2Week className="headerIcon"/>
            <span onClick={()=> setOpenDate(!openDate)} className="headerSearchText">{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
            {openDate && <DateRange
                editableDateInputs={true}
                onChange={item => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date"
                minDate={new Date()}
            />}
        </div>
        <div className="headerSearchItem">
            <VscPerson size={25} className="headerIcon"/>
            <span onClick={()=> setOpenOptions(!openOptions)} className="headerSearchText">{`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
               {openOptions && <div className="options">
                    <div className="optionItem">
                        <span className="optionText">Adult</span>
                        <div className="optionCounter">
                        <button disabled={options.adult <=1}
                            className="optionCounterButton" onClick={()=> handleOption("adult", "d")}><FiMinus className="try"/>
                        </button>
                        <span className="optionCounterNumber">{options.adult}</span>
                        <button className="optionCounterButton" onClick={()=> handleOption("adult", "i")}><FiPlus className="try"/></button>
                        </div>
                    </div>
                    <div className="optionItem">
                        <span className="optionText">Children</span>
                        <div className="optionCounter">
                        <button disabled={options.children <=0}
                            className="optionCounterButton" onClick={()=> handleOption("children", "d")}><FiMinus className="try"/>
                        </button>
                        <span className="optionCounterNumber">{options.children}</span>
                        <button className="optionCounterButton" onClick={()=> handleOption("children", "i")}><FiPlus className="try"/></button>
                        </div>
                    </div>
                    <div className="optionItem">
                        <span className="optionText">Room</span>
                        <div className="optionCounter">
                        <button disabled={options.room <=1}
                            className="optionCounterButton" onClick={()=> handleOption("room", "d")}><FiMinus className="try"/>
                        </button>
                        <span className="optionCounterNumber">{options.room}</span>
                        <button className="optionCounterButton" onClick={()=> handleOption("room", "i")}><FiPlus className="try"/></button>
                        </div>
                    </div>
                </div>}
        </div>
        <div className="headerSearchItem">
            <BsSearch className="headerIcons" onClick={handleSearch}/>
        </div>
    </div>
    </div>
  )
}

export default Start