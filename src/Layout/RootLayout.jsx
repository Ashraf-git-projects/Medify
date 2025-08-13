import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Faq from '../components/Faq';
import Advertise from '../components/Advertise';
import Footer from '../components/Footer';

const RootLayout = () => {
  return (
    <div>
      <NavBar />
      <div className="route_container">
        <Outlet />
      </div>
      {/* Common for all pages */}
      <Faq />
      <Advertise />
      <Footer />
    </div>
  );
};

export default RootLayout;
