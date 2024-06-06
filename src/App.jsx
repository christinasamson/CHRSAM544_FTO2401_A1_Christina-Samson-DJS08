import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from '../pages/Home';
import About from '../pages/About';
import Vans from '../pages/Vans/Vans';
import VansDetail from '../pages/Vans/VansDetail';
import Dashboard from '../pages/Host/Dashboard'; 
import Income from '../pages/Host/Income';
import Reviews from '../pages/Host/Reviews';
import HostVans from '../pages/Host/HostVans.jsx';
import HostVanDetails from '../pages/Host/HostVanDetails.jsx';
import HostVanPricing from '../pages/Host/HostVanPricing';
import HostVanInfo from '../pages/Host/HostVanInfo.jsx';
import HostVanPhotos from '../pages/Host/HostVanPhotos.jsx';
import Layout from '../components/Layout';
import HostLayout from '../components/HostLayout';

import "/server"


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VansDetail />} />
          
          <Route path="/host" element={<HostLayout />}>
            <Route path="/host" element={<Dashboard />} />
            <Route path="/host/income" element={<Income />} />
            <Route path="/host/reviews" element={<Reviews />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVanDetails />}>
              <Route index element={<HostVanInfo/>} />
              <Route path="pricing" element={<HostVanPricing />} />
              <Route path="photos" element={<HostVanPhotos />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}


ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);