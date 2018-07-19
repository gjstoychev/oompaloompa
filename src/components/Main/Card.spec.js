import React from 'react'
import { shallow } from 'enzyme'
import { Link } from 'react-router-dom'

import formatGender from '../../scripts/formatGender'

import Card from './Card'
import './Main.css'

describe('(Component) Card', () => {
  it('should render the component', () => {
    const employee = {
      id: '1',
      first_name: 'first1',
      last_name: 'last1',
      profession: 'dev',
      image: '1.jpg',
      gender: 'M',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    }

    const wrapper = shallow(<Card employee={employee} />)

    expect(wrapper.equals(
      <div className='card'>
        <Link to={{pathname: '/1'}}>
          <img src='1.jpg' alt='Avatar'/>
          <h2>first1 last1</h2>
          <h3>{formatGender('M')}</h3>
          <h3>dev</h3>
        </Link>
      </div>
    )).toEqual(true)
  })
})