const assert = require('chai').assert;
const testFunction = require('../app')
const hello = testFunction.hello
const addNumbers = testFunction.addNumbers
const checkIfUpcase = testFunction.checkIfUpcase
const turnToCamelCase = testFunction.turnToCamelCase
const knapsackProblem = testFunction.knapsackProblem
const checkIfInteger = testFunction.checkIfInteger
const fizzBuzz = testFunction.fizzBuzz
const numeralToInteger = testFunction.numeralToInteger
const anagram = testFunction.anagram
const twoNumbers = testFunction.twoNumbers
const singleInteger = testFunction.singleInteger
const missingNumber = testFunction.missingNumber

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
    // it('should ignore data that is not string'), () => {
    //   let result = turnToCamelCase(["hello", "THIS", "iS", "ALOt", "of", ["hd", "tv"], "StUfF", "to", 1, "thInk", "AbOut", 200])
    //   assert.deepequal(result, 'helloThisIsAlotOfStuffToThinkAbout')
    // }
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
    it('should return empty array when given all items over weight', () => {
      const items = [
        {id: 'a', value: 100, weight: 10},
        {id: 'b', value: 100, weight: 10},
        {id: 'c', value: 100, weight: 10},
        {id: 'd', value: 100, weight: 10},
        {id: 'e', value: 100, weight: 10},
        {id: 'f', value: 100, weight: 10},
        {id: 'g', value: 100, weight: 10},
        {id: 'h', value: 100, weight: 10},
        {id: 'i', value: 100, weight: 10},
        {id: 'j', value: 100, weight: 10},
      ]
      const maxWeight = 8
      const result = knapsackProblem(items, maxWeight)
      assert.deepEqual(result, [] )
    })
  })
  describe('checkIfInteger()', () => {
    it('should return true if num is an integer', () => {
     
      const result = checkIfInteger(8)
      assert.equal(result, true )
    })
        it('should return false if num is not an integer', () => {
      const result = checkIfInteger(8.5)
      assert.equal(result, false )
    })
  })
  describe('fizzBuzz()', () => {
    it('should return Fizz if number is divisible by 3', () => {
      const result = fizzBuzz(9)
      assert.equal(result, 'Fizz')
    })
    it('should return Buzz if number is divisible by 5', () => {
      const result = fizzBuzz(10)
      assert.equal(result, 'Buzz')
    })
    it('should return FizzBuzz if number is divisible by both 3 and 5', () => {
      const result = fizzBuzz(30)
      assert.equal(result, 'FizzBuzz')
    })
  })
  describe('numeralToInteger()', () => {
    it('should take a roman numeral and retun the interger that it represents', () => {
      const result = numeralToInteger("V")
      assert.equal(result, 5)
    })
    it('should work for IV and XL', () => {
      const result = numeralToInteger("IV")
      assert.equal(result, 4)
    })
  })
  describe('anagram()', () => {
    it('should return true if the inputs are anagrams', () => {
      const result = anagram('iceman', 'cinema')
      assert.equal(result, true)
    })
    it('should return false if input are not anagrams', () => {
      const result = anagram('cool', 'rool')
      assert.equal(result, false)
    })
  })
  describe('twoNumbers()', () => {
    it('should return the indexes of the numbers in array where the sum = target', () => {
      const arr = [1, 3, 5, 9]
      const result = twoNumbers(arr, 8)
      assert.deepEqual(result, [1, 2])
    })
  })
  describe('singleInteger()', () => {
    it('should return the integer that is only present once in the given array', () => {
      const arr = [1,1,2,2,3,4,4,5,5]
      const result = singleInteger(arr)
      assert.equal(result, 3)
    })
  })
  describe('missingNumber()', () => {
    it('should find the number not present from 1 to 100', () => {
      const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100]
      const result = missingNumber(arr)
      assert.equal(result, 66)
    })
  })

})
