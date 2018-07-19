import React from 'react'
import PropTypes from 'prop-types'

import './Search.css'

class Search extends React.Component {
  static propTypes = {
    setFilter: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)

    this.handleFilterChange = this.handleFilterChange.bind(this)
  }

  handleFilterChange ({target}) {
    this.props.setFilter(target.value)
  }

  render() {
    return (
      <input
        type='text'
        placeholder='Search'
        onChange={this.handleFilterChange}
      />
    )
  }
}

export default Search
