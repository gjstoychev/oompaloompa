import moment from 'moment'

import reducer from './details'
import * as details from './details'

describe('(Redux Module) details', () => {
  describe('(Reducer)', () => {
    it('should be initialized', () => {
      const got = reducer(undefined, {})

      const want = {
        data: {},
        cached: {},
        loading: true
      }

        expect(got).toEqual(want)
    })

    it('should return the previous state if an action was not matched', () => {
      const state = {fake: 'state'}

      const got = reducer(state, {type: '@@@@@@@'})

      expect(got).toEqual(state)
    })

    it('should add loading to the state on GET_OOMPA_DETAILS', () => {
      const state = {
        data: {},
        cached: {},
        loading: false
      }

      const got = reducer(state, {
        type: details.GET_OOMPA_DETAILS
      })

      const want = {
        data: {},
        cached: {},
        loading: true
      }

      expect(got).toEqual(want)
    })

    it('should add data and cached to the state on GET_OOMPA_DETAILS_SUCCESS', () => {
      const state = {
        cached: {},
        data: {},
        loading: true
      }

      const expiryDate = moment().add(1, 'd')

      const got = reducer(state, {
          type: details.GET_OOMPA_DETAILS_SUCCESS,
          payload: {
            data: {name: 'Joe', gender: 'M'}
          },
          meta: {
            previousAction: {id: 'id1', expiryDate}
          }
      })

      const want = {
        cached: {id1: {name: 'Joe', gender: 'M', expiryDate}},
        data: {name: 'Joe', gender: 'M', expiryDate},
        loading: false
      }

      expect(got).toEqual(want)
    })

    it('should return the previous state on GET_OOMPA_DETAILS_FAILURE', () => {
      const state = {
        cached: {},
        data: {},
        loading: true
      }

      const got = reducer(state, {
        type: details.GET_OOMPA_DETAILS_FAILURE
      })

      const want = {
        cached: {},
        data: {},
        loading: false
      }

      expect(got).toEqual(want)
    })

    it('should add a cached item to data on GET_DETAILS_FROM_CACHE', () => {
      const expiryDate = moment().add(1, 'd')

      const state = {
        cached: {
          id1: {name: 'Joe', gender: 'M', expiryDate},
          id2: {name: 'Jen', gender: 'F', expiryDate}
        },
        data: {},
        loading: true
      }

      const got = reducer(state, {
        type: details.GET_DETAILS_FROM_CACHE,
        id: 'id2'
      })

      const want = {
        cached: {
          id1: {name: 'Joe', gender: 'M', expiryDate},
          id2: {name: 'Jen', gender: 'F', expiryDate}
        },
        data: {name: 'Jen', gender: 'F', expiryDate},
        loading: false
      }

      expect(got).toEqual(want)
    })
  })

  describe('(Action Creators)', () => {
    it('should return the action object on getDetailsFromCache', () => {
      const got = details.getDetailsFromCache('id1')

      const want = {
        type: details.GET_DETAILS_FROM_CACHE,
        id: 'id1'
      }

      expect(got).toEqual(want)
    })
  })
})