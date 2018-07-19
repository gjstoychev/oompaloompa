import React from 'react'
import { shallow } from 'enzyme'

import moment from 'moment'

import Main from './Main'
import Navbar from '../Navbar'
import Header from './Header'
import CardList from './CardList'

import './Main.css'

describe('(Component) Main', () => {
  const getPage = jest.fn()
  const setFilter = jest.fn()

  const pages = [
    {
      id: '1',
      first_name: 'first1',
      last_name: 'last1',
      profession: 'dev',
      image: '1.jpg',
      gender: 'M',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }, {
      id: '2',
      first_name: 'first2',
      last_name: 'last2',
      profession: 'medic',
      image: '2.jpg',
      gender: 'F',
      description: 'Consectetur adipiscing elit, lorem ipsum dolor sit amet.'
    }
  ]

  const wrapper = shallow(
    <Main
      pages={pages}
      loading={false}
      getPage={getPage}
      setFilter={setFilter}
    />
  )

  it('should render the component', () => {
    expect(wrapper.equals(
      <div className='main'>
        <Navbar />
        <Header setFilter={setFilter} />
        <CardList results={pages} loading={false} />
      </div>
    )).toEqual(true)
  })

  it('should call getPage on mount if there is no expiry date', () => {
      expect(getPage).toHaveBeenCalledTimes(1)

      expect(getPage).toBeCalledWith(1)
  })

  it('should not call getPage on mount if there is active expiry date', () => {
    const expiryDate = moment().add(1, 'd')

    const getPage = jest.fn()

    const wrapper = shallow(
      <Main
        pages={pages}
        expiryDate={expiryDate}
        loading={false}
        getPage={getPage}
        setFilter={setFilter}
      />
    )

    expect(wrapper.equals(
      <div className='main'>
        <Navbar />
        <Header setFilter={setFilter} />
        <CardList results={pages} loading={false} />
      </div>
    )).toEqual(true)

    expect(getPage).toHaveBeenCalledTimes(0)
  })
})