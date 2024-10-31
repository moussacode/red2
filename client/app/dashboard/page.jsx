import { DashList } from '@/components/DashList';
import { NavBar } from '@/components/NavBar';
import React from 'react'



const page = () => {
  return (
    <div >
        <NavBar name="Dashboard"/>
        <DashList/>

    </div>
  )
}

export default page;