import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import configureMockStore from 'redux-mock-store'
import moment from 'moment'

import MainContainer from './MainContainer'
import Main from '../components/Main'

describe('(Redux Container) Main', () => {
  let container, component, expiryDate

  beforeEach(() => {
    expiryDate = moment().add(1, 'd')

    const store = configureMockStore()({
      main: {
        pages: [
          {id: '1', first_name: 'Jim', last_name: 'Joe', profession: 'developer'},
          {id: '2', first_name: 'Hay', last_name: 'Ho', profession: 'medic'}
        ],
        expiryDate,
        loading: true
      }
    })

    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <MainContainer />
        </MemoryRouter>
      </Provider>
    )

    container = wrapper.find(MainContainer)
    component = container.find(Main)
  })

  it('should render the component with the provided pages', () => {
    const got = component.prop('pages')

    const want = [
      {id: '1', first_name: 'Jim', last_name: 'Joe', profession: 'developer'},
      {id: '2', first_name: 'Hay', last_name: 'Ho', profession: 'medic'}
    ]

    expect(got).toEqual(want)
  })

  it('should render the component with the provided expiry date', () => {
      const got = component.prop('expiryDate')

      expect(got).toEqual(expiryDate)
  })

  it('should render the component with the provided loading statement', () => {
    const got = component.prop('loading')

    expect(got).toEqual(true)
  })

  it('should render the component with the provided filter', () => {
    const store = configureMockStore()({
      main: {
        pages: [
          {id: '1', first_name: 'Jim', last_name: 'Joe', profession: 'developer'},
          {id: '2', first_name: 'Hay', last_name: 'Ho', profession: 'medic'}
        ],
        filter: 'Jo'
      }
    })

    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <MainContainer />
        </MemoryRouter>
      </Provider>
    )

    const container = wrapper.find(MainContainer)
    const component = container.find(Main)
    const got = component.prop('pages')

    const want = [{id: '1', first_name: 'Jim', last_name: 'Joe', profession: 'developer'}]

    expect(got).toEqual(want)
  })
})