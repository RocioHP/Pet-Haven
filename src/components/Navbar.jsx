import React from 'react'
import Logo from "../assets/img/logoPetHaven.png"
import { FaBars, FaTimes } from "react-icons/fa"
import { useState } from 'react'

const navlinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Services & Prices",
    link: "/services",
  },
  {
    title: "Packges",
    link: "/packeges",
  },
  {
    title: "About Us",
    link: "/aboutus",
  }
]

const Navbar = () => {
  const [open, setOpen] = useState(false);



  return (
    <div className='flex justify-around items-center sticky'>
      <img className="h-16 m-4" src={Logo} alt="Pet Haven icon" />
      
        <div className='hidden md:flex md:items-center md:justify-between'>
          {/*navlinks*/}
          <div className='ml-10 flex items-baseline space-x-4'>
              {navlinks.map((link, index) => (
                <a key={index} className='text-gray-700 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-md font-medium' href={link.link}>{link.title}</a>
              ))}
          </div>   
        </div>
      {/*hamburger  button*/}
      <div className='mr-2 flex md:hidden'>
        <button>
          <span className='sr-only'>Menu open</span>
          {open == true ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </div>
  )
}

export default Navbar
