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
import Register from './pages/Register';
import Contracts from './pages/Contracts';
import ActiveContracts from './pages/ActiveContracts';
import Dashboard2 from './pages/Dashboard2';

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
  {
    path: "/register",
    element: <>
      <NavBar/>
      <Register/>
      <Footer/>
    </>,
  },
  {
    path: "/contracts",
    element: <>
      <NavBar/>
      <Contracts/>
      <Footer/>
    </>,
  },
  {
    path: "/dashboard/contracts",
    element: <>
      <NavBar/>
      <ActiveContracts/>
      <Footer/>
    </>,
  },
  {
    path: "/dashboard2",
    element: <>
      <NavBar/>
      <Dashboard2/>
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
