# DH Postcode

[![version][version]](http://npm.im/dh-postcode)
[![MIT License][MIT License]](http://opensource.org/licenses/MIT)
[![Standard][Standard]](http://standardjs.com)
[![Standard Version][Standard Version]](https://github.com/conventional-changelog/standard-version)
[![Size][Size]](https://github.com/danhayden/dh-postcode/blob/master/index.js)

## Usage

```js
const Postcode = require('dh-postcode')
const postcode = Postcode('e C  1a1  Ah  ')

postcode.valid() // => true
postcode.format() // => 'EC1A 1AH'

```

[version]: https://img.shields.io/npm/v/dh-postcode.svg
[MIT License]: https://img.shields.io/npm/l/dh-postcode.svg
[Standard]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg
[Standard Version]: https://img.shields.io/badge/release-standard%20version-brightgreen.svg
[Size]: https://badge-size.herokuapp.com/danhayden/dh-postcode/master/index.js
