import React from 'react'
import { Link } from 'react-router-dom'

import './Navbar.css'

const Navbar = () => (
  <nav className='navbar'>
    <Link to={{pathname: '/'}}>
      <img
        src='https://s3.eu-central-1.amazonaws.com/napptilus/level-test/imgs/logo-umpa-loompa.png'
        alt='Logo'
      />
    </Link>
    <h2>Oompa Loompa's Crew</h2>
  </nav>
)

export default Navbar