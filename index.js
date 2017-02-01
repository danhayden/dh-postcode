var validationRegex = /^[a-z]{1,2}\d[a-z\d]?\s*\d[a-z]{2}$/i
var NON_BREAKING_SPACE = ' '

function sanitise (postcode) {
  postcode = postcode || ''
  postcode = postcode.replace(/\s+/g, '')
  postcode = postcode.replace(/\+/g, '')
  postcode = postcode.toUpperCase()
  postcode = postcode.split('')
  postcode.splice(-3, 0, NON_BREAKING_SPACE)
  postcode = postcode.join('')
  if (postcode === NON_BREAKING_SPACE) {
    return ''
  }
  return postcode
}

function validate (postcode) {
  return !!postcode.match(validationRegex)
}

function Postcode (rawPostcode) {
  var formattedPostcode = sanitise(rawPostcode)
  var valid = validate(formattedPostcode)

  return {
    valid: function () {
      return valid
    },

    format: function () {
      return formattedPostcode
    }
  }
}

module.exports = Postcode
