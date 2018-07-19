import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import configureMockStore from 'redux-mock-store'

import DetailsContainer from './DetailsContainer'
import Details from '../components/Details'

describe('(Redux Container) Details', () => {
  let container, component

  beforeEach(() => {
    const location = {
      pathname: '/id1'
    }

    const store = configureMockStore()({
      details: {
        cached: {
          id1: {name: 'Joe', gender: 'M'},
          id2: {name: 'Jen', gender: 'F'}
        },
        data: {name: 'Jen', gender: 'F'},
        loading: false
      }
    })

    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <DetailsContainer location={location} />
        </MemoryRouter>
      </Provider>
    )

    container = wrapper.find(DetailsContainer)
    component = container.find(Details)
  })

  it('should render the component with the provided details', () => {
    const got = component.prop('details')

    const want = {name: 'Jen', gender: 'F'}

    expect(got).toEqual(want)
  })

  it('should render the component with the provided cached data', () => {
    const got = component.prop('cached')

    const want = {
      id1: {name: 'Joe', gender: 'M'},
      id2: {name: 'Jen', gender: 'F'}
    }

    expect(got).toEqual(want)
  })

  it('should render the component with the provided loading statement', () => {
    const got = component.prop('loading')

    expect(got).toEqual(false)
  })
})