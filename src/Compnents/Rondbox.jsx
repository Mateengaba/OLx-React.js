import React from 'react';
import bike from '../assets/bike-r.png';
import books from '../assets/books-r.png';
import bag from '../assets/bag-r.png';
import camra from '../assets/camra-r.png';
import car from '../assets/car-r.png';
import dress from '../assets/dreaa-r.png';
import furniture from '../assets/furniture-r.png';
import mobile from '../assets/mobile-r.png';
import property from '../assets/property-r.png';
import truck from '../assets/truck-r.png';
import animal from '../assets/animal-r.png';
import Rondcategry from './Rondcategry';
import './rondbox.css'





const Rondbox = () => {
    return (
        <>
            <div className='container-Catgry'>

                <div className="cont-heading">
                    <h4>All Categories</h4>
                </div>

                <div className='card-circle-main'>

                    <div className="card-Round">

                        <Rondcategry img1={bike} text1="Bike" />
                    </div>

                    <div className="card-Round">
                        <Rondcategry img1={books} text1="Books" />
                    </div>

                    <div className="card-Round">
                        <Rondcategry img1={bag} text1="Jobs" />
                    </div>
                    <div className="card-Round">
                        <Rondcategry img1={camra} text1="Home Appliances" />
                    </div>

                    <div className="card-Round">
                        <Rondcategry img1={car} text1="Vehicles" />
                    </div>

                    <div className="card-Round">
                        <Rondcategry img1={dress} text1="Fashion" />
                    </div>


                    <div className="card-Round">
                        <Rondcategry img1={furniture} text1="Furniture" />
                    </div>

                    <div className="card-Round">
                        <Rondcategry img1={mobile} text1="Mobiles" />
                    </div>


                    <div className="card-Round">
                        <Rondcategry img1={property} text1="Property" />
                    </div>


                    <div className="card-Round">
                        <Rondcategry img1={truck} text1="Agriculture" />
                    </div>

                    <div className="card-Round">
                        <Rondcategry img1={animal} text1="Animals" />
                    </div>

                </div>



            </div>



        </>
    );
}

export default Rondbox;
