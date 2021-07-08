console.log(arrowTitle)
/* START CODE UNDER THIS LINE */

//===========>Pulse Check  <================

//1- Create a global variable myFavoriteFood and return its value in the function's local scope.
// make sure that the variable is in the global scope
let myFavoriteFood=10
const favoriteFood = function () {
    return myFavoriteFood
  };

  //2- Create a function updateFavoriteFood that updates the value of myFavoriteFood
  const updateFavoriteFood = function (newValue) {
   return myFavoriteFood=newValue
  };
  
  //3- Use the following closure function to create two separate counters

  const createCounter = function (start) {
    let counter = 0;
  
    // this anonymous function is a closure function that has access to its own closure variable
    return function () {
      return ++counter;
    };
  };

