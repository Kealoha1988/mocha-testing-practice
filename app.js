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

  const capitatlizer = (word) => {
    if (typeof(word) == "string") {
        const lowerCaseWord = word.toLowerCase()
        const cappedLetter = lowerCaseWord[0].toUpperCase()
        const result = cappedLetter + lowerCaseWord.slice(1)
      return result
  } else {
    word = ""
    }
  }

  const firstWord = array[0].toLowerCase()
  const restOfArray = array.map(word => capitatlizer(word)).slice(1).join("")
  const answer = firstWord + restOfArray
  return answer
}
}
