/* global test, expect */
const Postcode = require('./index')
const NON_BREAKING_SPACE = ' '

test('make as invalid postcode', function () {
  const actual = Postcode('12abc12').valid()
  const expected = false
  expect(actual).toBe(expected)
})
test('format postcode', function () {
  const actual = Postcode('e C  1a1  Ah  ').format()
  const expected = 'EC1A' + NON_BREAKING_SPACE + '1AH'
  expect(actual).toBe(expected)
})

test('return empty string when formating empty postcode', function () {
  const actual = Postcode('').format()
  const expected = ''
  expect(actual).toBe(expected)
})
