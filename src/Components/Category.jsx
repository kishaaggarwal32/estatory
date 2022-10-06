import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Users } from './users';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import StarRating from './StarRating';
import { FaStar} from 'react-icons/fa';
import {FiSearch} from 'react-icons/fa';

import Card from 'react-bootstrap/Card';

var list = [];
function Category() {
  const [rating,setRating]=useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [userSearchData, setUserSearchData] = useState("");


  return (



    <div className='rest'>
      <div className='divnav'>
        <Navbar className='navbar' bg="white" expand="lg">
          <Container fluid>

            <Navbar.Brand href="#" className='brand'>Estatory</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >

              </Nav>
              <div>
                <FontAwesomeIcon icon="fa-regular fa-magnifying-glass" />
              </div>

              <input
                type="text"
                placeholder="Search"
                className="me-2 search"
                aria-label="Search"
                onChange={(e) => { setSearchTerm(e.target.value) }}
              />


            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div class="info">
        <h1>Search properties to rent</h1>
      </div>



      <div className='filters row'>
        <div className='col-md-3'>
          <p className='filter-name'>Location</p>
          <select className='selects' onChange={l => setLocation(l.target.value)}>
            <option className='options'>Select</option>
            <option className='options'>Delhi</option>
            <option className='options'>Mumbai</option>
            <option className='options'>Ahmedabad</option>
            <option className='options'>Surat</option>
            <option className='options'>aligarh</option>
            <option className='options'>Vadodara</option>
            <option className='options'>Rajkot</option>

          </select>
        </div>
        <div className="verLine col"></div>

        <div className='col-md-3'>
          <p className='filter-name'>Price</p>
          <select className='selects' onChange={p => setPrice(p.target.value)}>
            <option className='options'>Select</option>
            <option className='options'>5000-10000</option>
            <option className='options'>10000-15000</option>
            <option className='options'>15000-20000</option>
            <option className='options'>20000-25000</option>
            <option className='options'>25000-30000</option>
            <option className='options'>30000-35000</option>
            <option className='options'>35000-40000</option>

          </select>
        </div>
        <div className="verLine col"></div>

        <div className='col-md-3'>
          <p className='filter-name'>Property Type</p>
          <select className='selects' onChange={t => setType(t.target.value)}>
            <option className='options'>Select</option>
            <option className='options'>Residential</option>
            <option className='options'>Commercial</option>
            <option className='options'>Industrial</option>
            <option className='options'>Land</option>


          </select>
          


        </div>

        <div className="verLine col"></div>

        <div className='col-md-3 star'>
        <p className='filter-name'>Property Type</p>
        {[...Array(5)].map((star,i)=>{
            const ratingValue=i+1;
            return <label>
                <input type="radio" value={ratingValue} onClick={()=>setRating(ratingValue)}
                
                ></input>
                <FaStar className='fa-star' color={ratingValue<=rating?"#FFDE00":"grey"} size={20}/></label>})}          


        </div>



      </div>


      <div className='shape'>




        <div className='row'>

          
          {Users.filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase()))
              .filter(f=> f.location.toLowerCase().includes(location.toLowerCase()))
            .filter(k => k.type.toLowerCase().includes(type.toLowerCase()))
            .filter(j=>j.rating.toString().toLowerCase().includes(rating.toString().toLowerCase()))
            .filter(u => u.price.toLowerCase().includes(price.toLowerCase()))
            .map(u => (
              <div className='col-md-3'>
                <Card className="caard" style={{ width: '18rem' }}>
                  <Card.Img variant="top" className='card-image' src={u.image} />
                  <Card.Body>
                    <Card.Title>{u.name}</Card.Title>
                    <Card.Text className='location'>{u.location}</Card.Text>
                    <Card.Text>
                      {u.description}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                    <div>
        {[...Array(5)].map((star,i)=>{
            const ratingValue=i+1;
            
            return <label>
                <input type="radio" value={ratingValue} onClick={()=>u.rating=rating}
                
                ></input>
                <FaStar className='fa-star' color={ratingValue<=u.rating?"#FFDE00":"grey"} size={20}/></label>})}          


        </div>
                  </Card.Body>
                </Card>
              </div>
            ))}
          {location}
          {type}


        </div>
      </div>
    </div>


  )

}



export default Category
