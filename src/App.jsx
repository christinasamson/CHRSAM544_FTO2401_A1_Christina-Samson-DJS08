import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "../pages/Home";
import About from "../pages/About";
import Vans from '../pages/Vans';
import VansDetail from '../pages/VansDetail';
import Layout from '../components/Layout';

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
        </Route>
      </Routes>
    </BrowserRouter>
  )
}


ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);