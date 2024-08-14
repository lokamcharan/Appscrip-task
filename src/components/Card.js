
"use client"
import React, { useState } from "react";
import './Card.css'; 
import Filter from '../components/Filter'

function Card() {
  const images = [
    "./Image9.png",
    "./Image2.png",
    "./Image3.png",
    "./Image4.png",
    "./Image5.png",
    "./Image6.png",
    "./Image7.png",
    "./Image8.png",
    "./Image9.png",
    "./Image10.png",
    "./Image2.png",
    "./Image4.png",
    "./Image6.png",
    "./Image8.png",
    "./Image10.png",
    "./Image3.png",
    "./Image6.png",
    "./Image9.png",
  ];

  const [filterOpen, setFilterOpen] = useState(false);
  const toggleFilter = () => setFilterOpen(!filterOpen);

  return (
    <div className="card-container">
      <Filter/>
      <div className="product-images">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          {images.map((image, index) => (
            <div
              key={index}
              style={{
                width: '28%',
                textAlign: 'center',
                padding: '10px',
              }}
            >
              <img src={image} alt={`product ${index + 1}`} style={{ width: '100%' }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;

