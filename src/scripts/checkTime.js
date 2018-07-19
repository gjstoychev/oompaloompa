import moment from 'moment'

const checkTime = (time) => {
  let currentTime = moment()

  if (currentTime.diff(time, 's') > 0) {
    return false
  }

  console.log('Time until next fetch:', currentTime.diff(time, 's'), 'seconds.')

  return true
}

export default checkTime