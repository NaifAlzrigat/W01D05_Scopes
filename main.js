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
    myFavoriteFood=newValue
  };
  
  //3 - Use the following closure function to create two separate counters

  const createCounter = function () {
    let counter =0;
  
    // this anonymous function is a closure function that has access to its own closure variable
    return function () {
      return ++counter;
    };
  };
  const count_1=createCounter();
  const count_2=createCounter();

//4- Modify createCounter to take a parameter that represents the starting point for the counter
const createCounter_2 = function (start) {
  let counter =start;

  // this anonymous function is a closure function that has access to its own closure variable
  return function () {
    return ++counter;
  };
};
const count_a=createCounter_2();
const count_b=createCounter();
 //===========> Practice <================

 //1- Predict the value of the following variables and explain why.
 let age = 25;
 if (true) {
   age = 30;
 }
 age; // 30 because any variable I can access I can change
 //نفس المتغير عدل عليه
 const myName = "John";
 if (true) {
   const myName = "Jane";
 }
 myName; // 
 //اعتبره variable  ثاني داخل scope  
 

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
//التعديل صار على متغير داخل سكوب ثاني

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
    
    if(countDownValue>0){
        countDownValue=countDownValue-1
         return countDownValue
    }else return "count down is over"

  };

  //4- Write a function countUp that should do the opposite of countDown. With every invocation the count value should be incremented by one.
  const countUp = function () {
   
    countDownValue=countDownValue+1
    return countDownValue
  };

  //5- Write a function resetCount that accepts a number argument start and updates the count variable to equal the starting value and return a string implying that.
  const resetCount = function (start) {
    countDownValue=start
    return "the count has been reset"
  };
  
  //6- Write a function addToList
  //that accepts a string argument toDo
  // and returns the current list as a string. Every time we invoke the function it should return the old toDo item plus the new one.
  let oldToDo=''
  const addToList = function (toDo) {
    oldToDo=oldToDo+' '+toDo

   return oldToDo
  }; 

  //7- Write a function createToDoList
  // that works similarly to addToList function
  // but instead of a global variable use a closure variable.
  
  const createToDoList = function () {
    let oldToDo=''
   
   return function (toDo) {
   return oldToDo=oldToDo+' '+toDo 
  
  }; 
}
  
const toDoListOne=createToDoList()
const toDoList_3=createToDoList()

//8- Write a function deposit
// that accepts a number argument amount
// and returns the current account balance
// after depositing the amount.
let balance=0
const deposit = function (amount) {
      balance=balance+amount
    return balance
  }; //how I can save the change on varable
  
  //9- Write a function withdraw
  // that accepts a number argument amount
  // and returns the current account balance
  // after withdrawing the amount.
  const withdraw = function (amount) {
    balance=balance-amount
    return balance
  }; 

  //10- Write a closure function createAccount
  // that accepts a number argument initialValue
  // that represents the starting value of the account balance
  // and return a closure function with two parameters, transactionType and amount
  // that deposit or withdraw from the account balance depending on the transactionTypeand returns the total balance amount.
  // Make sure to prevent transactions that withdraw more than the total balance.
  const createAccount = function (initialValue) {
    balance=initialValue
   return function(transactionType,amount)
    {
      
      if(transactionType==="deposit")
      {
        return deposit(amount)
      }else if(transactionType==="withdraw" && amount<=balance){
        return withdraw(amount)
      }else{ return "insufficient funds, current balance: 0"}
      
      }}
    const accountTwo = createAccount(500)
  



  //===========> Extra  Practice <================

  //1-Write a function minMax
  // that accepts a number argument number
  // and returns a string representing the maximum and the minimum numbers.
  // Read the comments for more information.
 
 let max=0
  const minMax = function (number) {
   
    if (number <= Number.MAX_VALUE) {
        return  "the maximum number is: "+ max +" and the minimum number is"+number
 
    }else if(number > Number.MIN_VALUE){
      max=number
      return  "the minimum number is "+number+ " and the maximum number is: "+max 
    } else return "ssss"
  };//??????


  //2- Modify the rockPaperScissors function from the previous lesson to save the score of how many times the user has won and how many the user has lost. Return the score with every invocation.
  let youWon=0
  let youLose=0
  const rockPaperScissors_1 = function (move) {
    
     const randomMove = function () {

        const str=['scissors', 'paper','rock']
        return str[Math.floor(Math.random()*str.length)]
      }//randomMove();
      console.log(randomMove())
      console.log(move)
      if(randomMove()==='rock'&&move==='scissors'||randomMove()==='paper'&&move==='rock'||randomMove()==='scissors'&&move==='paper'){
        youLose+=1
        console.log("You lose : "+youLose+" times")
      
        return "you lose"
    }else if(randomMove() === move){
        return "it is a draw"
    }else {youWon+=1
      console.log("You Won : "+youWon+" times")

      return "you win"}
    
    //   if(randomMove === move){
    //     return "it is a draw"
    // }else{
    //     if(randomMove==='rock'&&move==='scissors'||randomMove==='paper'&&move==='rock'||randomMove==='scissors'&&move==='paper'){
    //         return "you lose"
    //     }else  {return "you win"}
  };

  //4- Modify the rockPaperScissors function to have an optional second boolean parameter reset that when true will reset the game score back to zero.
  const rockPaperScissors = function (move,reset) {
    if(reset==true&&move==""){
      youWon=0,youLose=0
      return "the game has been reset"
    }else{
    const randomMove = function () {

       const str=['scissors', 'paper','rock']
       console.log((Math.random()*str.length)*100<50)
       return str[Math.floor(Math.random()*str.length)]
       
     }//randomMove();
    
     console.log(randomMove())
     console.log(move)
     if(randomMove()==='rock'&&move==='scissors'||randomMove()==='paper'&&move==='rock'||randomMove()==='scissors'&&move==='paper'){
       youLose+=1
       console.log("You lose : "+youLose+" times")
     
       return "you lose"
   }else if(randomMove() === move){
       return "it is a draw"
   }else {youWon+=1
     console.log("You Won : "+youWon+" times")

     return "you win"}
   
   //   if(randomMove === move){
   //     return "it is a draw"
   // }else{
   //     if(randomMove==='rock'&&move==='scissors'||randomMove==='paper'&&move==='rock'||randomMove==='scissors'&&move==='paper'){
   //         return "you lose"
   //     }else  {return "you win"}
   
 }};


 //5- Modify the rockPaperScissors function to keep track of the last winner and modify the randomMove function to have a 25% chance of picking the same move if the user have lost the previous round, otherwise it picks a random move.
