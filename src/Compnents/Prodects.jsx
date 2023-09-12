import React from 'react'
import MyCards from './MyCards';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Car from '../assets/Car.jpeg';
import Plot from '../assets/plot.jpeg';
import Bike from '../assets/bike.jpeg';
import Flat from '../assets/flat.jpeg';
import House from '../assets/House.jpeg';
import Mobile from '../assets/Mobile.jpeg';
import Iphone from '../assets/Iphone.jpeg';
import Ghar from '../assets/Ghar.jpeg';




function Prodects() {
  return (
    <>
 

    <div className='m-5' style={{marginLeft:'15px',marginTop:'50px'}}>
        <h1>All Products !</h1>

    <Container fluid>
            <Row>

<div className='mt-1 col-lg-3 col-md-6 col-sm-12 border-2' >
<MyCards CardSrc={Car} price="Rs: 19,50,000" Model="150,000km,   2017" disc="Toyata belta from 2019" discs="Gulistan-e-Jouhar Karachi"  />

</div>


<div className=' col-lg-3 col-md-6 col-sm-12 border-2' >
<MyCards CardSrc={Plot } price="Rs:40,00,000/." Model="Plot for Sale Installment." disc="40,000 per Month" discs="Surjani Town Karachi"  />

</div>

<div className=' col-lg-3 col-md-6 col-sm-12 border-2' >
<MyCards CardSrc={Bike} price="Rs:66,000/." Model="Honda CD-70, 2015." disc="65000km" discs="Gulshan - Karachi"  />

</div>

<div className=' col-lg-3 col-md-6 col-sm-12 border-2' >
<MyCards CardSrc={Flat} price="95,00,000/." Model="3Bad D/D " disc="2nd Floor for sale" discs="Gulshan-e-Iqbal block-15 Karachi"  />

</div>



<div className=' col-lg-3 col-md-6 col-sm-12 border-2' >
<MyCards CardSrc={House} price="19,500,000/." Model="120sq 5Bad D/D " disc=" House for sale" discs="Gulshan-e-Iqbal block-15 Karachi"  />

</div>



<div className=' col-lg-3 col-md-6 col-sm-12 border-2' >
<MyCards CardSrc={Mobile} price="90,000/." Model="Vivo Y-33 " disc="Box Pack" discs="Saddar- Karachi"   />

</div>


<div className=' col-lg-3 col-md-6 col-sm-12 border-2' >
<MyCards CardSrc={Iphone} price="105,000/." Model="Iphone 15 " disc="Box Pack" discs="Saddar- Karachi"  />

</div>

<div className=' col-lg-3 col-md-6 col-sm-12 border-2' >
<MyCards CardSrc={Ghar} price="2,95,00,000/." Model="240sq House " disc="6bad Ground+1 for sale" discs="Gulshan-e-Iqbal block-15 Karachi"  />

</div>


</Row>
         </Container>

    </div>
      
    </>
  )
}

export default Prodects
