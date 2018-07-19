import React from 'react'
import PropTypes from 'prop-types'

import Card from './Card'
import './Main.css'

const CardList = ({results, loading}) => {
  if (loading) {
    return <h4>Loading...</h4>
  }

  return (
    <div className='card-list'>
      {results.map(result =>
        <Card key={result.id} employee={result} />
      )}
    </div>
  )
}

CardList.propTypes = {
  results: PropTypes.array,
  loading: PropTypes.bool
}

export default CardList