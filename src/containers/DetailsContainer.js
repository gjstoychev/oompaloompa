import { connect } from 'react-redux'

import { getDetails, getDetailsFromCache } from '../reducers/details'

import Details from '../components/Details'

const mapStateToProps = (state) => ({
  details: state.details.data,
  cached: state.details.cached,
  loading: state.details.loading
})

const mapDispatchToProps = {
  getDetails, getDetailsFromCache
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Details)