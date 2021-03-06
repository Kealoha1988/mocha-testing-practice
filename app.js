module.exports = {
  hello: function (word) {
    if (word == "hello") {
      return "Hello World!"
    } else {
      return "excuse me??"
    }
  },
  addNumbers: function (a, b) {
    if (isNaN(a) || isNaN(b)) {
      return "only numbers please"
    } else {
      return a + b
    }
  },


  checkIfUpcase: function (word) {
    if (word == word.toUpperCase()) {
      return true
    } else {
      return false
    }
  },
  // Make function that takes and array as an argument. Returns the array as camelCase

  turnToCamelCase: function (array) {

    const capitatlizer = (word) => {
      if (typeof (word) == "string") {
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

  knapsackProblem: function (items, maxWeight) {

    let result = []

    const checkForBestValue = (item) => {
      const average = item.value / item.weight
      return { id: item.id, value: item.value, weight: item.weight, score: average }
    }

    const sortByBestValue = items.map(item => checkForBestValue(item)).sort((a, b) => b.score - a.score)

    const addNumbers = (array) => {
      let sum = 0
      for (item of array) {
        sum += item.weight
        if (sum <= 8) {
          result.push(item)
        }
      }
    }

    addNumbers(sortByBestValue)

    return result.map(item => item.id)
  },

  ///chedk if number is an integer. The function takes in a number and checks if the number is an integer
  checkIfInteger: function (num) {
    return num % 1 === 0

  },
  //if number is divisible by 3 return Fizz, if by 5 retrun Buzz, if by both 3 and 5 FizzBuzz
  fizzBuzz: function (num) {
    if (num % 3 === 0 && num % 5 === 0) {
      return 'FizzBuzz'
    }
    else if (num % 3 === 0) {
      return 'Fizz'
    }
    else if (num % 5 === 0) {
      return 'Buzz'
    }
  },
  ///GIVEN A numeral NUMERAL, CONVERT IT TO AN INTEGER
  numeralToInteger: function (numeral) {
    //sequence of numeral letters
    let arr = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];

    //value of the respective numeral letters
    let values = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
    }

    let answer = 0
    let previous = 0
    for (let i = numeral.length - 1; i >= 0; i--) {
      if (arr.indexOf(numeral[i]) >= previous) {
        answer = answer + values[numeral[i]]
      } else {
        answer = answer - values[numeral[i]]
      }
      previous = arr.indexOf(numeral[i])
    }
    return answer
  },
  //Given two strings s and t, return true if t is an anagram of s, and false otherwise
  anagram: function (s, t) {
    if (s.length !== t.length) return false

    word = {}

    for (let i = 0; i < s.length; i++) {
      let letter = s[i]
      if (word[letter]) {
        word[letter]++
        console.log(word)
      } else {
        word[letter] = 1
      }
    }

    for (let i = 0; i < t.length; i++) {
      let letter = t[i]
      if (word[letter]) {
        word[letter]--
        console.log(word)
      } else {
        return false
      }
    }
    return true
  },
  //Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
  twoNumbers: function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
      let num = nums[i];
      let numIndex = nums.indexOf(num);

      let otherNum = target - num;
      let otherNumIndex = nums.lastIndexOf(otherNum);


      if ((nums.includes(otherNum)) && (numIndex != otherNumIndex)) {
        return [numIndex, otherNumIndex];
      }
    }
  },
  //GIVEN AN ARRAY OF INTEGERS, EVERY ELEMENT APPEARS TWICE EXCEPT FOR ONE. FIND THAT ONE
  singleInteger: function (arr) {
    let num = {}
    for (let i = 0; i < arr.length; i++) {
      let item = arr[i]
      if (num[item]) {
        num[item]++
      }else {
        num[item] = 1
      }
    }
    for (let key in num) {
      if (num[key] == 1)
        return key
    }
  },
  //How to search a missing number in an array that contains integers from 1 to 100
  missingNumber: function (arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i + 1] != arr[i] + 1){
        return arr[i] + 1
      }
    }
  },
  //How do you check if a string contains only digits?
  onlyDigits: function (str) {
    
    let count = 0
    for (let i = 0; i < str.length; i++) {
      let character = str[i]
      if (Number.isNaN(parseInt(character)) == false){
        count = count + 1
        console.log(parseInt(character))
        }else{
          count = count - 1
        }
    }
    if (count == str.length){
      return true
    }else{
      return false
    }
  },
  //An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not
  palindrome: function (num){
    let backwardsNum = num.toString().split('').reverse().join('')
    if(parseInt(backwardsNum) === num){
        console.log(backwardsNum)
        return true
    }else{
        return false
    }
  },
  //Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
  targetIndex: function (nums, target){
    for (let i = 0; i < nums.length; i ++) {
      if (nums[i] == target){
        console.log(target)
        return nums.indexOf(target)
      }else{
        return nums.indexOf(target - 1) + 1
      }
    }
  },
  //Given the root of a binary tree, return the inorder traversal of its nodes' values.
  inorderTraversal: function (root) {
    let result = [];

    const traverse = (node) => {
        if(!node)return;     
        traverse(node.left);
        result.push(node.val)
        traverse(node.right);
      }

    traverse(root);

    return result
   
  }

}
