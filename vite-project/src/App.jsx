import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import Users from './components/Users';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import UserDetails from './components/UserDetails';
import NotFound from './components/NotFound';
import MainLayout from './components/MainLayout';
import UserLayout from './components/UserLayout';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path='/users' element={<UserLayout />}>
          <Route index element={<Users/>} />
          {/* <Route path="/:id" element={<UserDetails />} /> */}
        </Route>
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  )
}

export default App
