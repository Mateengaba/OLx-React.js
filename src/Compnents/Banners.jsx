import React from 'react';
import Logo from "../assets/OLX-Logo.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Banners.css'

const Banners = () => {
  return (
    <>
    <div className='parent'>


        <div className="banner ">
        <div className="info">

          <div className="olxlogo">
            <img src={Logo} alt="img"></img>
          </div>

          <div className="PROPERTY">
          <FontAwesomeIcon icon="fa-sharp fa-solid fa-buildings" />
          <span>PROPERTY</span>
          </div>

          <div className="motors">
          <FontAwesomeIcon icon="fa-sharp fa-regular fa-car" />
           <span> MOTORS</span>
          </div>






        </div>
        </div>
       
        </div>


    </>
  );
}

export default Banners;
