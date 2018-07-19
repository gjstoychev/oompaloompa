import React from 'react'
import PropTypes from 'prop-types'

import Search from '../Search'

const Header = ({setFilter}) => (
  <div className='main-header'>
    <Search setFilter={setFilter} />
    <h1>Find your Oompa Loompa</h1>
    <h2>There are more than 100k</h2>
  </div>
)

Header.propTypes = {
  setFilter: PropTypes.func.isRequired
}

export default Header