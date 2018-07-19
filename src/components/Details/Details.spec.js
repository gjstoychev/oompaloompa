import React from 'react'
import { shallow } from 'enzyme'

import Navbar from '../Navbar'
import Details from './Details'
import DetailsBox from './DetailsBox'
import './Details.css'

describe('(Component) Details', () => {
  const cached = {
    id1: {
      first_name: 'first1',
      last_name: 'last1',
      profession: 'dev',
      image: '1.jpg',
      gender: 'M',
      expiryDate: '2048-03-25T23:15:16.198Z',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    },
    id2: {
      first_name: 'first2',
      last_name: 'last2',
      profession: 'medic',
      image: '2.jpg',
      gender: 'F',
      expiryDate: '1998-05-25T23:15:16.198Z',
      description: 'Consectetur adipiscing elit. Lorem ipsum dolor sit amet.'
    }
  }

  const data = {
    first_name: 'first1',
    last_name: 'last1',
    profession: 'dev',
    image: '1.jpg',
    gender: 'M',
    expiryDate: '2048-03-25T23:15:16.198Z',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  }

  const location = {
    pathname: '/id1'
  }

  it('should render the component for a first time', () => {
    const getDetails = jest.fn()
    const getDetailsFromCache = jest.fn()

    const wrapper = shallow(
      <Details
        details={data}
        cached={undefined}
        loading={false}
        location={location}
        getDetails={getDetails}
        getDetailsFromCache={getDetailsFromCache}
      />
    )

    expect(getDetails).toHaveBeenCalledTimes(1)

    expect(getDetails).toBeCalledWith('id1')

    expect(getDetailsFromCache).toHaveBeenCalledTimes(0)

    expect(wrapper.equals(
      <div className='details'>
          <Navbar />
          <DetailsBox details={data} loading={false} />
      </div>
    )).toEqual(true)
  })

  it('should render already cached component', () => {
    const getDetails = jest.fn()
    const getDetailsFromCache = jest.fn()

    const wrapper = shallow(
      <Details
        cached={cached}
        location={location}
        getDetails={getDetails}
        getDetailsFromCache={getDetailsFromCache}
      />
    )

    expect(getDetails).toHaveBeenCalledTimes(0)

    expect(getDetailsFromCache).toHaveBeenCalledTimes(1)

    expect(getDetailsFromCache).toBeCalledWith('id1')
  })

  it('should render cached but expired component', () => {
    const getDetails = jest.fn()
    const getDetailsFromCache = jest.fn()

    const location = {
      pathname: '/id2'
    }

    const wrapper = shallow(
      <Details
        cached={cached}
        location={location}
        getDetails={getDetails}
        getDetailsFromCache={getDetailsFromCache}
      />
    )

    expect(getDetails).toHaveBeenCalledTimes(1)

    expect(getDetails).toBeCalledWith('id2')

    expect(getDetailsFromCache).toHaveBeenCalledTimes(0)
  })
})