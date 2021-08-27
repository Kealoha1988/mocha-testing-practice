module.exports = {
  hello: function(word){
    if (word == "hello"){
  return "Hello World!"
    }else{
      return "excuse me??"
    }
  },
  addNumbers: function(a, b){
    if(isNaN(a) || isNaN(b)){
      return "only numbers please"
    }else{
    return a + b
    }
  },

  
  checkIfUpcase: function(word){
    if(word == word.toUpperCase()){
      return true
    }else{
      return false
    }
  },
// Make function that takes and array as an argument. Returns the array as camelCase

turnToCamelCase: function(array){
  
}
}
