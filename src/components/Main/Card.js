import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import formatGender from '../../scripts/formatGender'

const Card = ({employee}) => (
  <div className='card'>
    <Link to={{pathname: `/${employee.id}`}}>
      <img src={employee.image} alt='Avatar'/>
      <h2>{employee.first_name} {employee.last_name}</h2>
      <h3>{formatGender(employee.gender)}</h3>
      <h3>{employee.profession}</h3>
    </Link>
  </div>
)
  
Card.propTypes = {
  employee: PropTypes.object.isRequired
}

export default Card