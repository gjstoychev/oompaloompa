import moment from 'moment'

// Actions
export const GET_OOMPA_DETAILS = 'GET_OOMPA_DETAILS'
export const GET_OOMPA_DETAILS_SUCCESS = 'GET_OOMPA_DETAILS_SUCCESS'
export const GET_OOMPA_DETAILS_FAILURE = 'GET_OOMPA_DETAILS_FAILURE'

export const GET_DETAILS_FROM_CACHE = 'GET_DETAILS_FROM_CACHE'

// Action Creators
export const getDetails = (id) => {
  const expiryDate = moment().add(1, 'd')

  return {
    type: GET_OOMPA_DETAILS,
    payload: {
      request: {
        method: 'get',
        url: `/napptilus/oompa-loompas/${id}`
      }
    },
    expiryDate,
    id
  }
}

export const getDetailsFromCache = (id) => ({
  type: GET_DETAILS_FROM_CACHE,
  id
})

// Reducer
export const initialState = {
  data: {},
  cached: {},
  loading: true
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case GET_OOMPA_DETAILS:
      return {
        ...state,
        loading: true
      }

    case GET_OOMPA_DETAILS_SUCCESS:
      console.log('GET_OOMPA_DETAILS_SUCCESS')

      const {id, expiryDate} = action.meta.previousAction

      const payloadData = {
        ...action.payload.data,
        expiryDate
      }

      return {
        ...state,
        data: payloadData,
        cached: {
          ...state.cached,
          [id]: payloadData
        },
        loading: false
      }

    case GET_OOMPA_DETAILS_FAILURE:
      return {
        ...state,
        loading: false
      }

      case GET_DETAILS_FROM_CACHE:
      console.log('GET_DETAILS_FROM_CACHE')

      return {
        ...state,
        data: state.cached[action.id],
        loading: false
      }

    default:
      return state
  }
}