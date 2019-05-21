const {expect} = require('chai')
const twoSum = require('./twoSum')

describe('twoSum', () => {
    it('takes in an array and a target number, and returns an array', () => {
        expect(Array.isArray(twoSum([1, 1], 2))).to.equal(true)
    })
    it('returns the first index pair of numbers occurred in the array which add up to the target number in the second parameter', () => {
        expect(twoSum([1, 2, 3], 5)).to.eql([1, 2])
    })
    it('returns an empty array if no pairs add up to the target number', () => {
        expect(twoSum([5, 3, 1], 2).length).to.equal(0)
    })
    it('returns empty array when the input array is either empty or has only one number', () => {
        expect(twoSum([], 1).length).to.equal(0)
        expect(twoSum([2], 1).length).to.equal(0)
    })
})