const assert = require('chai').assert;
const app = '../app'
const hello = require('../app').hello

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

})
