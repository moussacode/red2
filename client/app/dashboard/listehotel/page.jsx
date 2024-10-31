'use client'

import HotelGrid from '@/components/HotelGrid';
import { NavAdd } from '@/components/NavAdd';
import { NavBar } from '@/components/NavBar';
import React from 'react'

 const page = () => {
  return (
    <div>
          <NavBar name="Liste des Hotel" /> 
          <NavAdd/>
          <HotelGrid/>
          
          

    </div>
  )
}
export default page;