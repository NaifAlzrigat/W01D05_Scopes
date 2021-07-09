console.log(arrowTitle)
/* START CODE UNDER THIS LINE */

//===========> Pulse Check  <================

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
  
  //3+4 - Use the following closure function to create two separate counters

  const createCounter = function (start) {
    let counter = 0;
  
    // this anonymous function is a closure function that has access to its own closure variable
    return function () {
      return ++counter;
    };
  };
  const count1=createCounter();
  const count2=createCounter();


 //===========> Practice <================

 //1- Predict the value of the following variables and explain why.
 let age = 25;
 if (true) {
   age = 30;
 }
 age; // 30 because any variable I can access I can change
 
 const myName = "John";
 if (true) {
   const myName = "Jane";
 }
 myName; // Jone because it const cannt change
 

//2-Predict the value of the following function invocations.
let number = 10;
const func1 = function () {
  let number = 15;

  if (true) {

    let number = 24;
  }

  return number;
};

func1(); // 15

const func2 = function (age) {
  age = 10;
  if (true) {
    let age = 24;
    age = 20;
  }

  return age;
};

func2(26); // 10

//3- Write a function countDown that returns a number representing a count down value. With each invocation the number should be lower by one and at zero it will no longer decrement and instead it will return "count down is over".
let countDownValue=4
const countDown = function () {
    
    if(--countDownValue>0){
        
         return countDownValue
    }else return "count down is over"

  };

  //4- Write a function countUp that should do the opposite of countDown. With every invocation the count value should be incremented by one.
  const countUp = function () {
    if(++countDownValue){
        
        return countDownValue
   }
  };

  //5- Write a function resetCount that accepts a number argument start and updates the count variable to equal the starting value and return a string implying that.
  const resetCount = function (start) {
    countDownValue=start
    return "the count has been reset"
  };
  
  //6- Write a function addToList that accepts a string argument toDo and returns the current list as a string. Every time we invoke the function it should return the old toDo item plus the new one.
  let oldToDo
  const addToList = function (toDo) {
   if(oldToDo==undefined){
       oldToDo=toDo
       return toDo
   }else return oldToDo +" "+toDo
  }; // I cannt save all value of oldTodo

  //7- Write a function createToDoList that works similarly to addToList function but instead of a global variable use a closure variable.
  const createToDoList = function () {
    let oldToDo
    return function (toDo) {
     if(oldToDo==undefined){
         oldToDo=toDo
         return toDo
     }else return oldToDo +" "+toDo
    };
  };

const toDoListOne=createToDoList()

//8- Write a function deposit that accepts a number argument amount and returns the current account balance after depositing the amount.

const deposit = function (amount) {
    let amount1
deposit.amount=amount1
     amount1= amount
    return amount 
  }; //how I can save the change on varable
  
  //9- Write a function withdraw that accepts a number argument amount and returns the current account balance after withdrawing the amount.
  const withdraw = function (amount) {
    // TODO: Your code here
  }; //same problem above

  //10- Write a closure function createAccount that accepts a number argument initialValue that represents the starting value of the account balance and return a closure function with two parameters, transactionType and amount that deposit or withdraw from the account balance depending on the transactionTypeand returns the total balance amount. Make sure to prevent transactions that withdraw more than the total balance.
  const createAccount = function (initialValue) {
    const deposit = function (amount) {
        let amount1
    deposit.amount=amount1
         amount1= amount
        return amount 
      };

    const withdraw = function (amount) {
        // TODO: Your code here
      };
  };
  
  const accountOne = createAccount(0);

  //===========> Extra  Practice <================

  //1-Write a function minMax that accepts a number argument number and returns a string representing the maximum and the minimum numbers. Read the comments for more information.
  const minMax = function (number) {
    //if (number === Number.POSITIVE_INFINITY) {

   // }
  };// I dont understand
  