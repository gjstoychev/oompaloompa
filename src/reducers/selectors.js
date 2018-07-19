import { createSelector } from 'reselect'

export const pagesSelector = (state) => state.main.pages

export const filterSelector = state => state.main.filter

export const filteredPagesSelector = createSelector(
  [pagesSelector, filterSelector],
  (pages, filter) => {
    if (filter) {
      return Object.values(pages).filter(e =>
        e.first_name.toLowerCase().indexOf(filter.toLowerCase()) > -1 ||
        e.last_name.toLowerCase().indexOf(filter.toLowerCase()) > -1 ||
        e.profession.toLowerCase().search(filter.toLowerCase()) > -1
      )
    }

    return Object.keys(pages).map(i => pages[i])
  }
)