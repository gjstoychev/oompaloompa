import React from 'react'
import PropTypes from 'prop-types'

import Navbar from '../Navbar'
import Header from './Header'
import CardList from './CardList'

import checkTime from '../../scripts/checkTime'

import './Main.css'

class Main extends React.Component {
  static propTypes = {
    pages: PropTypes.array,
    expiryDate: PropTypes.object,
    loading: PropTypes.bool,
    getPage: PropTypes.func.isRequired,
    setFilter: PropTypes.func.isRequired
  }

  componentDidMount() {
    const {expiryDate, getPage} = this.props

    if (expiryDate && checkTime(expiryDate)) {
      return
    }

    const pageNumber = 1

    getPage(pageNumber)
  }

  render() {
    const {pages, loading, setFilter} = this.props

    return (
      <div className='main'>
        <Navbar />
        <Header setFilter={setFilter} />
        <CardList results={pages} loading={loading} />
      </div>
    )
  }
}

export default Main