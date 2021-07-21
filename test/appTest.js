const assert = require('chai').assert;
const app = '../app'
const hello = require('../app').hello
const addNumbers = require('../app').addNumbers

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
    
    it('should add the 2 argumets', () => {
      let result = addNumbers(1, 5)
      assert.equal(result, 6)
    })
    it('should add the 2 argumets', () => {
      let result = addNumbers(5, 5)
      assert.equal(result, 10)
    })
    it('add numbers should return type number', () => {
      let result = addNumbers()
      assert.typeOf(result, 'number')
    })
  })

})
