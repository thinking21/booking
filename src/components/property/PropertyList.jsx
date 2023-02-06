import React from 'react'
import "./Property.css"
import hh from "../../images/pexels-roxanne-shewchuk-2404422.jpg";
import jj from "../../images/pexels-dayvison-de-oliveira-silva-5733615.jpg"
import kk from "../../images/r-architecture-2gDwlIim3Uw-unsplash.jpg"
import ll from "../../images/vu-anh-ExOmPidaHvY-unsplash.jpg"
import oo from "../../images/pexels-pixabay-258154.jpg"

const PropertyList = () => {
  return (
    <div className="pList">
        <div className="pListItem">
            <img src={hh} alt='' width={250} height={200} />
            <div className="pListTitles">
                <h2>Hotels</h2>
                <h2 className="rr">233 hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src={jj} alt='' width={250} height={200} />
            <div className="pListTitles">
                <h2>Apartments</h2>
                <h2 className="rr">233 hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src={oo} alt='' width={250} height={200} />
            <div className="pListTitles">
                <h2>Resorts</h2>
                <h2 className="rr">233 hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src={kk} alt='' width={250} height={200} />
            <div className="pListTitles">
                <h2>Villa</h2>
                <h2 className="rr">233 hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src={ll} alt='' width={250} height={200} />
            <div className="pListTitles">
                <h2>Cabin</h2>
                <h2 className="rr">233 hotels</h2>
            </div>
        </div>
    </div>
  )
}

export default PropertyList