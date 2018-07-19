import React from 'react'
import { shallow } from 'enzyme'

import Search from '../Search'
import Header from './Header'

describe('(Component) Header', () => {
  it('should render the component', () => {
    const setFilter = jest.fn()

    const wrapper = shallow(<Header setFilter={setFilter}/>)

    expect(wrapper.equals(
      <div className='main-header'>
        <Search setFilter={setFilter} />
        <h1>Find your Oompa Loompa</h1>
        <h2>There are more than 100k</h2>
      </div>
    )).toEqual(true)
  })
})