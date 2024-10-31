'use client'

import React from 'react'
import styled from 'styled-components';
import CardGrid from './CardGrid';

const NavContainer = styled.nav`
  
  
  padding: 0rem 2rem;
   background: white;

  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  height: 70px;
`;



export const DashList = () => {
  return (
    <div >
        <NavContainer>
            <p style={{marginBottom:'5px',fontSize:'24px'}}>
            Bienvenue sur RED Product
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </NavContainer>
        <CardGrid/>

    </div>
  )
}
