const formatGender = (gender) => {
  switch (gender) {
    case 'F':
      return 'Woman'

    case 'M':
      return 'Man'

    default:
      return 'Robot'
  }
}

export default formatGender