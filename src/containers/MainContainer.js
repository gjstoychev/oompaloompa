import { connect } from 'react-redux'

import { getPage, setFilter } from '../reducers/main'
import { filteredPagesSelector } from '../reducers/selectors'

import Main from '../components/Main'

export const mapStateToProps = (state) => ({
  pages: filteredPagesSelector(state),
  expiryDate: state.main.expiryDate,
  loading: state.main.loading
})

export const mapDispatchToProps = {
  getPage,
  setFilter
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Main)