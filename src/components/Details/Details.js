import React from 'react'
import PropTypes from 'prop-types'

import Navbar from '../Navbar'
import DetailsBox from './DetailsBox'

import checkTime from '../../scripts/checkTime'

import './Details.css' 

class Details extends React.Component {
  static propTypes = {
    details: PropTypes.object,
    cached: PropTypes.object,
    loading: PropTypes.bool,
    getDetails: PropTypes.func.isRequired,
    getDetailsFromCache: PropTypes.func.isRequired
  }

  componentDidMount() {
    const {cached, location, getDetails, getDetailsFromCache} = this.props

    const id = location.pathname.split('/')[1]

    for(let key in cached) {
      if (key === id && checkTime(cached[key].expiryDate)) {
        return getDetailsFromCache(id)
      }
    }

    getDetails(id)
  }

  render() {
    const {details, loading} = this.props

    return (
      <div className='details'>
        <Navbar />
        <DetailsBox details={details} loading={loading} />
      </div>
    )
  }
}

export default Details