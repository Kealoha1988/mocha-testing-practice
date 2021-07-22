module.exports = {
  hello: function(word){
    if (word == "hello"){
  return "Hello World!"
    }else{
      return "excuse me??"
    }
  },
  addNumbers: function(a, b){
    return a + b
  },
  checkIfUpcase: function(word){
    if(word == word.toUpperCase()){
      return true
    }else{
      return false
    }
  }
}