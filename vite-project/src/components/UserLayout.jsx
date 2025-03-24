import React from 'react'
import Navbar from './Navbar';

const UserLayout = () => {
  return (
      <div>
          <Navbar diraction="users" />
          <Outlet />
    </div>
  )
}

export default UserLayout