import React from 'react'
import { shallow } from 'enzyme'

import CardList from './CardList'
import Card from './Card'
import './Main.css'

describe('(Component) CardList', () => {
  it('should render the component', () => {
    const results = [{
      id: '1',
      first_name: 'first1',
      last_name: 'last1',
      profession: 'dev',
      image: '1.jpg',
      gender: 'M',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    }]

    const wrapper = shallow(
      <CardList results={results} loading={false} />
    )

    expect(wrapper.equals(
      <div className='card-list'>
        {results.map(result => <Card key={result.id} employee={result} />)}
      </div>
    )).toEqual(true)
  })

  it('should render the component with no data', () => {
    const wrapper = shallow(
      <CardList results={undefined} loading={true} />
    )

    expect(wrapper.equals(
      <h4>Loading...</h4>
    )).toEqual(true)
  })
})