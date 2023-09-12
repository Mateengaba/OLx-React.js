import React from 'react';
import blacklgo from "../assets/olx-black-logo.svg";
import Plus from "../assets/iconPlusSell_noinline.75fc7ea23e80b50447cf5757d8ef083a.svg"
import './Search.css'
import { Form } from 'react-bootstrap';

const Search = () => {
  return (
    <>

      <div className='main'>
        <div className='cont2'>

          <div className='img'>
            <img src={blacklgo} alt="img" />

          </div>

          {/* //location bar */}

          <div className='location'>

            {/* <select>
              <option disabled selected>Pakistan</option>
              <option value="Sindh">Sindh</option>
              <option value="Punjab">Punjab</option>
              <option value="Islamabad">Islamabad</option>
              <option value="Khyber Pakhtunkhw">Khyber Pakhtunkhw</option>
              <option value="Balochistan">Balochistan</option>


            </select> */}
            <Form.Select aria-label="Default select example">
              <option disabled selected> Select One</option>
              <option value="1">Sindh</option>
              <option value="2">Punjab</option> 
              <option value="3">Islamabad</option>
              <option value="3">Balochistan</option>
              <option value="3">Khyber Pakhtunkhw</option>

            </Form.Select>
          </div>

          {/* Searchbar */}

          <div className='searchbar'>
            <input type="search" placeholder="Find Car, Mobile Phone and More" name="Find Car, Mobile Phone and More" />

          </div>

          <div className='btn'>
            <button className="log"><a href="#"> Login </a></button>
            <button className="SELL"><a href="#"><img src={Plus} width="15px" height="15px" alt="img" /> SELL</a></button>

          </div>




        </div>
      </div>
    </>
  );
}

export default Search;