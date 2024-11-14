
import React from 'react'
import { Link } from 'react-router-dom'
import i from '../assets/image.png'
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="navbar-logo">
            <img src= {i} alt='logo'/>
        </div>
        <ul className="navbar-links">
            <li><Link to="/bus-info">Train Info</Link></li>
            <li><Link to="/seat-view">Train Seat Booking</Link></li>
            <li><Link to="/bookings">My Bookings</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/login">Logout</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar;


