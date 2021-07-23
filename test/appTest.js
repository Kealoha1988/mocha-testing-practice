const assert = require('chai').assert;
const app = '../app'
const hello = require('../app').hello
const addNumbers = require('../app').addNumbers
const checkIfUpcase = require('../app').checkIfUpcase

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

})
