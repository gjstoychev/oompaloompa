import React from 'react'
import { shallow } from 'enzyme'

import Search from './Search'
import './Search.css'

describe('(Component) Search', () => {
  let wrapper, setFilter

  beforeEach(() => {
    setFilter = jest.fn()

    wrapper = shallow(
      <Search setFilter={setFilter} />
    )
  })

  it('should render the component', () => {
    expect(wrapper.equals(
      <input
        type='text'
        placeholder='Search'
        onChange={wrapper.instance().handleFilterChange}
      />
    )).toEqual(true)
  })

  it('should invoke setFilter on input change', () => {
    const input = wrapper.find('input')
    
    input.simulate('change', {target: {value: 'H' }})

    expect(setFilter).toBeCalledWith('H')
  })
})