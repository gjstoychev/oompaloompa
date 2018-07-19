import moment from 'moment'

import checkTime from './checkTime'

describe('(scripts) checkTime', () => {
  it('should return false if the time set is before the current time', () => {
    const expires = moment().add(-24, 'h')

    const got = checkTime(expires)

    expect(got).toEqual(false)
  })

  it('should return true if the time set is after the current time', () => {
    const expires = moment().add(1, 'd')

    const got = checkTime(expires)

    expect(got).toEqual(true)
  })
})