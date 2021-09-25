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
  },

// knapsack problem
// List of items, where every item has a value and a weight. You have a bag that holds a maximum weight
// of x. Write a program that maximizes the value of the items you put into the bag whilst ensuring
// that you don't exceed the maximum weight

knapsackProblem: function(items, maxWeight){

  let result = []
  
  const checkForBestValue = (item) => {
    const average = item.value / item.weight
    return {id: item.id, value: item.value, weight: item.weight, score: average}
    }

  const sortByBestValue = items.map(item => checkForBestValue(item)).sort((a, b) => b.score - a.score)

  const addNumbers = (array) => {
    let sum = 0 
      for (item of array){
      sum += item.weight
        if (sum <= 8){
        result.push(item)
      }
    }
  }
  
  addNumbers(sortByBestValue)
  
  return  result.map(item => item.id)
  },

///chedk if number is an integer. The function takes in a number and checks if the number is an integer
  checkIfInteger: function(num){
    return num % 1 === 0

  },
//if number is divisible by 3 return Fizz, if by 5 retrun Buzz, if by both 3 and 5 FizzBuzz
  fizzBuzz: function(num){

  }
}
