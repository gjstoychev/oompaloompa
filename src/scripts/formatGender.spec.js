import formatGender from './formatGender'

describe('(scripts) formatGender', () => {
  it('should return a string from a letter', () => {
    const letters = ['M', 'F', 'Z']
    const genders = ['Man', 'Woman', 'Robot']

    for (const [index, value] of letters.entries()) {
      const got = formatGender(value)

      expect(got).toEqual(genders[index])
    }
  })
})

