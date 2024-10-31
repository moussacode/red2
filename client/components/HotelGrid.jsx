// HotelGrid.jsx
import React, { useState, useEffect } from 'react';
import HotelCard from './HotelCard';
import styled from 'styled-components';
import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_BACKEND_BASEURL;


const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Defines 4 equal-width columns */
  gap: 24px;
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
`;

const HotelGrid = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await axios.get(`${baseURL}/hotels`);
        setHotels(response.data);
      } catch (error) {
        console.error("Error fetching hotels:", error);
      }
    };
    
    fetchHotels();
  }, []);

  return (
    <GridContainer>
      {hotels.map((hotel) => (
        <HotelCard key={hotel._id} {...hotel} />
      ))}
    </GridContainer>
  );
};

export default HotelGrid;