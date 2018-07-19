import React from 'react'
import { shallow } from 'enzyme'

import { Link } from 'react-router-dom'

import Navbar from './Navbar'
import './Navbar.css'

describe('(Component) Navbar', () => {
  it('should render the component', () => {
    const wrapper = shallow(<Navbar />)

    expect(wrapper.equals(
      <nav className='navbar'>
        <Link to={{pathname: '/'}}>
          <img
            src='https://s3.eu-central-1.amazonaws.com/napptilus/level-test/imgs/logo-umpa-loompa.png'
            alt='Logo'
          />
        </Link>
        <h2>Oompa Loompa's Crew</h2>
      </nav>
    )).toEqual(true)
  })
})