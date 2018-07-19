import moment from 'moment'

// Actions
export const GET_OOMPA_PAGE = 'GET_OOMPA_PAGE'
export const GET_OOMPA_PAGE_SUCCESS = 'GET_OOMPA_PAGE_SUCCESS'
export const GET_OOMPA_PAGE_FAILURE = 'GET_OOMPA_PAGE_FAILURE'

export const SET_FILTER = 'SET_FILTER'

// Action Creators
export const getPage = (pageNumber) => {
  const expiryDate = moment().add(1, 'd')

  return {
    type: GET_OOMPA_PAGE,
    payload: {
      request: {
        method: 'get',
        url: `/napptilus/oompa-loompas?page=${pageNumber}`
      }
    },
    expiryDate
  }
}

export const setFilter = (searchedString) => ({
  type: SET_FILTER,
  searchedString
})

// Reducer
export const initialState = {
  pages: [],
  loading: true
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case GET_OOMPA_PAGE:
      return {
        ...state,
        loading: true
      }

    case GET_OOMPA_PAGE_SUCCESS:
      console.log('GET_OOMPA_PAGE_SUCCESS')

      return {
        ...state,
        pages: action.payload.data.results,
        expiryDate: action.meta.previousAction.expiryDate,
        loading: false
      }

    case GET_OOMPA_PAGE_FAILURE:
      return {
        ...state,
        loading: false
      }

    case SET_FILTER:
      return {
        ...state,
        filter: action.searchedString
      }

    default:
      return state
  }
}