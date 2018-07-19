import React from 'react'
import { shallow } from 'enzyme'

import DetailsBox from './DetailsBox'
import './DetailsBox.css'

describe('(Component) DetailsBox', () => {
  it('should render the component', () => {
    const details = {
      first_name: 'First',
      last_name: 'Last',
      profession: 'developer',
      image: '1.jpg',
      gender: 'M',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    }

    const wrapper = shallow(
      <DetailsBox details={details} loading={false} />
    )

    expect(wrapper.equals(
      <div className='details-box'>
        <img src='1.jpg' alt='Avatar'/>
        <h2>First Last</h2>
        <h3>Man</h3>
        <h3>developer</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      </div>
    )).toEqual(true)
  })

  it('should render the component while loading', () => {
    const wrapper = shallow(
      <DetailsBox details={undefined} loading={true} />
    )

    expect(wrapper.equals(
      <h4 className='loading'>Your Oompa Loompa is loading...</h4>
    )).toEqual(true)
  })
})