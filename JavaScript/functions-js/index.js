//-->   function statement
// function declaration and function declaration are same 
// we also called it as named functions

function a() {
  console.log("function statement");
}

a();


//-->  function expression
// a function assign to a varible

var b = function () {
  console.log("function expression");
};

b();

// the only diff between function statement and expression is "hositing"


//-->       anonymous functions 

// a function without name
// we cannot use directly these function
// these are used in a place where functions are used as a values

// function (){
//     console.log("anonymous function");
// }


//-->     named function expression
// same as function expression but we use named function to assign to a varible

var b = function c() {
    console.log("named function expression");
  };
  
b();

//-->  diff between parameters and arguments
// arguments are passed while calling function or in function call
// parameters are used to hold the input data of the function
// here x,y are parameters and m,n are arguments

function d(x,y) {
    console.log(x,y);
  }
  
  d(1,2);

//-->  returned function
// function which contain return statement

function e(){
    return console.log("returned function");
}

e();

//-->  arrow function
// function without name and function keyword
// (p1,p2) => { }

var f = () =>{
    console.log("arrow function");
}

f();


//--> async function
// function which contain await operator
