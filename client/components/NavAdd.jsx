'use client';
import { useState, useEffect } from 'react';
import React from 'react';
import styled from 'styled-components';
import { Plus } from 'lucide-react';
import HotelModal from './HotelModal';
const baseURL = process.env.NEXT_PUBLIC_BACKEND_BASEURL;

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: 70px;
`;

const AddButton = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
  border-radius: 8px;
  border: 0.2px solid black;
  background-color: white;
  color: black;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
  }
`;

export const NavAdd = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hotelCount, setHotelCount] = useState(0);

  // Function to fetch the current count of hotels
  async function fetchHotelCount() {
    try {
      const response = await fetch(`${baseURL}/hotels`);
      if (!response.ok) {
        throw new Error('Failed to fetch hotels');
      }
      const hotels = await response.json();
      setHotelCount(hotels.length); // Set the hotel count based on the fetched data
    } catch (error) {
      console.error('Error fetching hotel count:', error);
    }
  }

  // Call fetchHotelCount when the component mounts
  useEffect(() => {
    fetchHotelCount();
  }, []);

  async function createHotel(hotelData) {
    try {
      const response = await fetch(`${baseURL}/hotels`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(hotelData),
      });

      if (!response.ok) {
        throw new Error('Failed to create hotel');
      }

      const newHotel = await response.json();
      setHotelCount(prevCount => prevCount + 1); // Increment hotel count
      window.location.reload(); // Optional: Refresh the page to show new hotel
      return newHotel;
    } catch (error) {
      throw error;
    }
  }

  return (
    <NavContainer>
      <div>
        <p style={{ marginBottom: '5px', fontSize: '24px' }}>
          Hotel : {hotelCount} {/* Display hotel count */}
        </p>
      </div>

      <AddButton onClick={() => setIsModalOpen(true)}>
        <Plus size={18} />
        Creer un hotel
      </AddButton>

      <HotelModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        createHotel={createHotel}
      />
    </NavContainer>
  );
};
