// named function
function sayHello(greeting, name){
return `${greeting} ${name}`
}

console.log("function return value is", sayHello('Hiya', 'Danielle'))

// anonymous function
var add = function(firstNumber, secondNumber){
    return firstNumber + secondNumber
}

console.log("the sum is:", add(34,234))


// Declare a named function that takes an array of numbers, and returns the sum, or total, of all of the numbers in the array.

function getTotalOfArray(numbers){
    // start total at zero
    var total = 0
    // loop around the array
    for (var number of numbers) {
      // for each element in the array add to total
      total += number
    }
    // return the result
    return total
  }
  
  var arrayToTotal = [1, 2, 3, 4, 5]
  console.log("total is:", getTotalOfArray(arrayToTotal))
  
  
  var isKeyInObject = function(object, keyToCheck){
    // get all the keys
    var keys = Object.keys(object)
    // loop around the keys
    for (var key of keys){
      // check if this key matches the keyToCheck
      if (key === keyToCheck){
        // immediately exit the function returning true - don't need to check any more
        return true
      }
    }
    // if we're here we've checked all the keys and not found a match so we can return false
    return false
  }
  var objectToCheck = { name: 'Wojtek', age: 30 }
  // prints false
  console.log("is banana key in object", isKeyInObject(objectToCheck, "banana")) 
  // prints true
  console.log("is name key in object", isKeyInObject(objectToCheck, "name")) 



  // Create the following functions and test them by logging out their return value.

// MVP

// Part 1

// 1.a Total the numbers - Create a function that takes in an array of numbers as an argument and calculates the sum of the array's numbers.

function getTotalOfMyNumbers(numbers){
  var total = 0
  for (var number of numbers) {
    total += number
  }
  return total
}

var myNumbers = [1,2,3,4,5,6,7,8]
console.log("total is:", getTotalOfMyNumbers(myNumbers))

// 1.b Find the evens - Create a function that takes in an array of numbers as an argument and returns a new array containing just the even numbers.

  const arr = [1,2,3,4,5,6,7,8];
  const even = arr.filter(number => {
  return number % 2 === 0;
  });

  console.log(even);

// Part 2

var myBill = [
  {
    meal: 'Green Curry',
    price: 10,
    customer: 'Sally'
  }, {
    meal: 'Sea Bass',
    price: 12,
    customer: 'Upul'
  }, {
    meal: 'Fish and Chips',
    price: 10,
    customer: 'Rita'
  }, {
    meal: 'Stick Toffee Pudding',
    price: 4,
    customer: 'Upul'
  }, {
    meal: 'Apple Pie',
    price: 5,
    customer: 'Sally'
  }
]

// 2.a. Total the bill - Create a function that takes in a bill as an argument and calculates the total cost of the bill.

let billTotal = () => {
  for(var i of myBill){
    if(i === price)
}

console.log(billTotal)

// 2.b. Find meals by customer name - Create a function that takes in a bill and a customer name as an argument and returns a new array containing all the items for that customer.

// 2.c. Using the functions you wrote in part 4 and 5, find the total that Sally spent.


// 2.d. Find average item price - Create a function that takes in bill as an argument and calculates the average price of all the items.

// Extension

// Part 3
// Have a look at the following bodyBuilder object.

var bodyBuilder = {
  strength: 2,
  workOut: (mins) => {
   bodyBuilder.strength = bodyBuilder.strength * mins;
  }
}

// 3.a. Log out the the bodyBuilder's strength - the value should be 2.

// 3.b. Use the workOut function to update the bodyBuilder's strenth.

// 3.c. Create another function on the bodyBuilder called `lazeAbout`, that takes in a number of hours as an argument. Decrease the bodyBuilder's strength by dividing the strength by the number of hours.