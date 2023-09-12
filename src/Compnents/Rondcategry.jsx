import React from 'react';
// import './Rondbox.css'



const Rondcategry = (props) => {
  const { img1, text1 } = props;


  return (
    <>
      <div className="container-Catgry ">
        <div className="card-circle-main">
          <div className="card-Round">
            <img src={img1}></img>
            <h6>{text1}</h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default Rondcategry;
