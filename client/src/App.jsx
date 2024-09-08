import { useState } from 'react'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";

import NavBar from './components/NavBar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Contact from './pages/Contact';
import Marketplace from './pages/Marketplace';
import Support from './pages/Support';

const router = createBrowserRouter([
  {
    path: "/",
    element: <>
      <NavBar/>
      <Home/>
      <Footer/>
    </>,
  },
  {
    path: "/dashboard",
    element: <>
      <NavBar/>
      <Dashboard/>
      <Footer/>
    </>,
  },
  {
    path: "/about",
    element: <>
      <NavBar/>
      <About/>
      <Footer/>
    </>,
  },
  {
    path: "/contact",
    element: <>
      <NavBar/>
      <Contact/>
      <Footer/>
    </>,
  },
  {
    path: "/marketplace",
    element: <>
      <NavBar/>
      <Marketplace/>
      <Footer/>
    </>,
  },
  {
    path: "/support",
    element: <>
      <NavBar/>
      <Support/>
      <Footer/>
    </>,
  },
]);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
