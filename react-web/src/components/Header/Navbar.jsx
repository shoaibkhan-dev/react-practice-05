import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo"><img src="/src/assets/react.svg" alt="" />
       <ul className='navbar-menu'>
            <li><a href="home"></a>Home</li>
            <li><a href="about"></a>About</li>
            <li><a href="contact"></a>Contact</li>
            <li><a href="services"></a>Services</li>
        </ul>
        </div>
        <button>Sign in</button>
     
    </div>
  )
}

export default Navbar
