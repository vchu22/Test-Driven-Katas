const {expect} = require('chai')
const twoSum = require('./twoSum')

describe('twoSum', () => {
    it('takes in an array and a target number, and returns an array', () => {
        expect(Array.isArray(twoSum([1, 2, 3], 5))).to.equal(true)
    })
})