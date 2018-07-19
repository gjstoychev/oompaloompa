import moment from 'moment'

import reducer from './main'
import * as main from './main'

describe('(Redux Module) main', () => {
  describe('(Reducer)', () => {
    it('should be initialized', () => {
      const got = reducer(undefined, {})
      const want = main.initialState

      expect(got).toEqual(want)
    })

    it('should return the previous state if an action was not matched', () => {
      const state = {fake: 'state'}
      const got = reducer(state, {type: '@@@@@@@'})

      expect(got).toEqual(state)
    })

    it('should add loading to the state on GET_OOMPA_PAGE', () => {
      const state = {
        pages: [1, 2, 3],
        loading: false
      }

      const got = reducer(state, {
        type: main.GET_OOMPA_PAGE
      })

      const want = {
        pages: [1, 2, 3],
        loading: true
      }

      expect(got).toEqual(want)
    })

    it('should add pages to the state on GET_OOMPA_PAGE_SUCCESS', () => {
      const state = {
        pages: [],
        loading: true
      }

      const expiryDate = moment().add(1, 'd')
    
      const got = reducer(state, {
        type: main.GET_OOMPA_PAGE_SUCCESS,
        payload: {
          data: {
            results: [
              {id: '1', first_name: 'first1', last_name: 'last1', profession: 'prof1'},
              {id: '2', first_name: 'first2', last_name: 'last2', profession: 'prof2'}
            ]
          }
        },
        meta: {
          previousAction: {expiryDate}
        }
      })
    
      const want = {
        pages: [
          {id: '1', first_name: 'first1', last_name: 'last1', profession: 'prof1'},
          {id: '2', first_name: 'first2', last_name: 'last2', profession: 'prof2'}
        ],
        expiryDate,
        loading: false
      }
    
      expect(got).toEqual(want)
    })

    it('should return the previous state on GET_OOMPA_PAGE_FAILURE', () => {
      const state = {
        pages: [],
        loading: true
      }

      const got = reducer(state, {
        type: main.GET_OOMPA_PAGE_FAILURE
      })

      const want = {
        pages: [],
        loading: false
      }

      expect(got).toEqual(want)
    })

    it('should add filter to the state on SET_FILTER', () => {
      const state = {
        pages: [1, 2, 3]
      }

      const got = reducer(state, {
        type: main.SET_FILTER,
        searchedString: 'oompa'
      })

      const want = {
        pages: [1, 2, 3],
        filter: 'oompa'
      }

      expect(got).toEqual(want)
    })
  })

  describe('(Action Creators)', () => {
    it('should return the action object on setFilter', () => {
      const got = main.setFilter('oompa')

      const want = {
        type: main.SET_FILTER,
        searchedString: 'oompa'
      }

      expect(got).toEqual(want)
    })
  })
})