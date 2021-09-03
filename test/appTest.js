const assert = require('chai').assert;
const testFunction = require('../app')
const hello = testFunction.hello
const addNumbers = testFunction.addNumbers
const checkIfUpcase = testFunction.checkIfUpcase
const turnToCamelCase = testFunction.turnToCamelCase
const knapsackProblem = testFunction.knapsackProblem

describe('App', () => {
  describe('hello()', () => {
    it('if argument hello it should return hello', () => {
      let result = hello("hello")
      assert.equal(result, 'Hello World!');
    })
    it('if argumet good bye it should return excuse me??', () => {
      let result = hello("good bye")
      assert.equal(result, 'excuse me??');
    })
    it('should return type string', () => {
      let result = hello()
      assert.typeOf(result, 'string')
    })
  })
  describe('addNumbers()', () => {
    
    it('should add both arguments and return the value', () => {
      let result = addNumbers(1, 5)
      assert.equal(result, 6)
    })
    it('add numbers should return type number', () => {
      let result = addNumbers(5, 5)
      assert.typeOf(result, 'number')
    })
    it('add numbers should not return type string', () => {
      let result = addNumbers(5, 5)
      assert.notTypeOf(result, 'string', 'numbers are not strings')
      })
      it('should check if input is a number', () => {
      let result = addNumbers('hello', 6)
      assert.equal(result, "only numbers please")
    })
  })
  describe('checkIfUpcase()', () => {
    it('should return true if all upcase', () => {
      let result = checkIfUpcase('JOSEPH')
      assert.strictEqual(result, true, "this thing works")
    })
  })
    describe('turnToCamelCase()', () => {
    it('should turn array elements into camelCase string', () => {
      let result = turnToCamelCase(['Hello', 'this', 'sHould', 'LOOK', 'diFFernt'])
      assert.strictEqual(result, 'helloThisShouldLookDiffernt')
    })
    it('should ignore data that is not string'), () => {
      let result = turnToCamelCase(["hello", "THIS", "iS", "ALOt", "of", ["hd", "tv"], "StUfF", "to", 1, "thInk", "AbOut", 200])
      assert.equal(result, 'helloThisIsAlotOfStuffToThinkAbout')
    }
  })
  describe('knapsackProblem()', () => {
    it('should return items with max value that do not exceed max weight', () => {
      const items = [
        {id: 'a', value: 10, weight: 8},
        {id: 'b', value: 49, weight: 7},
        {id: 'c', value: 8, weight: 10},
        {id: 'd', value: 7, weight: 1},
        {id: 'e', value: 6, weight: .5},
        {id: 'f', value: 5, weight: 1},
        {id: 'g', value: 4, weight: 1},
        {id: 'h', value: 3, weight: 1},
        {id: 'i', value: 2, weight: 1},
        {id: 'j', value: 1, weight: 1},
      ]
      const maxWeight = 8
      const result = knapsackProblem(items, maxWeight)
      assert.deepEqual(result, [ 'e', 'b' ] )
    })
        it('should return only up to 8 lbs', () => {
      const items = [
        {id: 'a', value: 100, weight: 2},
        {id: 'b', value: 100, weight: 2},
        {id: 'c', value: 100, weight: 2},
        {id: 'd', value: 100, weight: 2},
        {id: 'e', value: 100, weight: 2},
        {id: 'f', value: 100, weight: 2},
        {id: 'g', value: 100, weight: 2},
        {id: 'h', value: 100, weight: 2},
        {id: 'i', value: 100, weight: 2},
        {id: 'j', value: 100, weight: 2},
      ]
      const maxWeight = 8
      const result = knapsackProblem(items, maxWeight)
      assert.deepEqual(result, [ 'a', 'b', 'c', 'd' ] )
    })
  })
  

})
