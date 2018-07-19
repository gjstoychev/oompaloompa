import React from 'react'
import PropTypes from 'prop-types'

import formatGender from '../../scripts/formatGender'

import './DetailsBox.css'

const DetailsBox = ({details, loading}) => {
  if (loading) {
    return <h4 className='loading'>Your Oompa Loompa is loading...</h4>
  }

  return (
    <div className='details-box'>
      <img src={details.image} alt='Avatar'/>
      <h2>{details.first_name} {details.last_name}</h2>
      <h3>{formatGender(details.gender)}</h3>
      <h3>{details.profession}</h3>
      <p>{details.description}</p>
    </div>
  )
}

DetailsBox.propTypes = {
  details: PropTypes.object,
  loading: PropTypes.bool
}

export default DetailsBox