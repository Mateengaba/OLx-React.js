import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';





const MyCards = (props) => {
    let {CardSrc, price, disc , discs , Model , Head} = props

    return (
        <>
        {/* <div   >
            <h1 className='m-5 d-flex ' style={{ width: '100%' }}> {Head} </h1>
            </div>  */}
            <br />
            <div className=''>

           <Card className='m-auto' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={CardSrc} height={200}  />
                <Card.Body>
                <Card.Title>{price}</Card.Title> <br/>
                    <h6>{Model}</h6><br/>

                    <Card.Text> {disc}</Card.Text> 
                    <Card.Text>{discs}</Card.Text>
                </Card.Body>
            </Card>


            </div>

        </>
    );
}

export default MyCards
