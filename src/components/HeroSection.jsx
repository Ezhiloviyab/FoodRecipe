import React from 'react';
import './hero-section.css';
import {Row, Col } from 'react-bootstrap';

export default function HeroSection() {
 
  return (
        <Row  className='typo '>
            <Col md={9}>
      <div className="typography">
        <h1 className="title">What Are We About</h1>
        <p className="info">FoodiesHub is a place where you can please your soul and tummy with delicious food recipes of all cuisines. And our service is absolutely free. So start exploring now.</p>
        <button className="btn">Explore now</button>
      </div>
      </Col><Col md={3}>
      <div className="gallery ">
       <img src="/briyani.jpg" style={{height:"300px",width:"300px"}}/>
             </div></Col>
             
    </Row>
  );
}
