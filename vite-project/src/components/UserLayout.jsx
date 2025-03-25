import React from 'react'
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const UserLayout = () => {
  return (
      <div>
          <Navbar diraction="users" />
          <Outlet/>
    </div>
  )
}

export default UserLayout