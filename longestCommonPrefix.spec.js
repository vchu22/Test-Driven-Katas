const {expect} = require('chai')
const longestCommonPrefix = require('./longestCommonPrefix')

describe('longestCommonPrefix', () => {
    it('takes in an array of string and returns a string', () => {
        expect(typeof longestCommonPrefix(['a', 'b', 'c'])).to.equal('string')
    })
})