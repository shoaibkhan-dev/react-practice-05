import React from 'react'
import './Navbar.css'
import { useState } from 'react'
const Navbar = () => {
 const [menu,setMenu] = useState('home')
  return (
    <div className='navbar'>
      <img src="/src/assets/react.svg" alt="" />
       <ul className='navbar-menu'>
            <li onClick={()=>setMenu('home')} className={menu==='home'?'active':''}>Home</li>
            <li onClick={()=>setMenu('about')} className={menu==='about'?'active':''}>About</li>
            <li onClick={()=>setMenu('contact')} className={menu==='contact'?'active':''}>Contact</li>
            <li onClick={()=>setMenu('services')} className={menu==='services'?'active':''}>Services</li>
        </ul>

        <button>Sign in</button>
     
    </div>
  )
}

export default Navbar
