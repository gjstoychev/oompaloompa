import {pagesSelector, filterSelector, filteredPagesSelector} from './selectors'

describe('(Selectors) filteredPagesSelector', () => {
  const state = {
    main: {
      pages: [
        {id: '1', first_name: 'first1', last_name: 'last1', profession: 'prof1'},
        {id: '2', first_name: 'first2', last_name: 'last2', profession: 'prof2'}
      ],
      filter: ''
    }
  }

  it('should return pages', () => {
    const got = pagesSelector(state)

    const want = [
      {id: '1', first_name: 'first1', last_name: 'last1', profession: 'prof1'},
      {id: '2', first_name: 'first2', last_name: 'last2', profession: 'prof2'}
    ]

    expect(got).toEqual(want)
  })

  it('should return filter', () => {
    const state = {
      main: {
        filter: '1234'
      }
    }

    const got = filterSelector(state)

    expect(got).toEqual('1234')
  })

  it('should return an array with all pages', () => {
    const got = filteredPagesSelector(state)

    const want = [
      {id: '1', first_name: 'first1', last_name: 'last1', profession: 'prof1'},
      {id: '2', first_name: 'first2', last_name: 'last2', profession: 'prof2'}
    ]

    expect(got).toEqual(want)
  })

  it('should return an array with filtered pages', () => {
    const state = {
      main: {
        pages: [
          {id: '1', first_name: 'first1', last_name: 'last1', profession: 'prof1'},
          {id: '2', first_name: 'first2', last_name: 'last2', profession: 'prof2'}
        ],
        filter: '2'
      }
    }

    const got = filteredPagesSelector(state)

    const want = [{id: '2', first_name: 'first2', last_name: 'last2', profession: 'prof2'}]

    expect(got).toEqual(want)
  })
})