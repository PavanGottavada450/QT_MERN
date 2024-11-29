// var username;
// // declaration

// username = 'manadeep'
// // assig

// var name = 'manadeep';
// // intilization

// var user = username + name

// console.log(user)

// var user = {
//     name:{
//         first:"raj",
//         last:"verma",
//     },
//     address:{
//         city:{
//             cityName:"mumbai",
//             pincode:4567,
//         }
//     }
// };

// var {name:{first,last}} = user

// var {address:{city:{cityName,pincode}}} = user

// function js(){
//     return [function f1(){
//         console.log("function")
//     }];
// }
// js()

// var obj = {
//   name: "Sagar",
//   fn: function () {
//     console.log(this);
//   },

//   fnArrow: () => {
//     console.log(this);
//   },
// };

// obj.fn();
// obj.fnArrow();


var obj1 = {
  name : "pavan",
};

var obj2 = {
  name : "sai",
};

function f1(x,y){
  console.log(this.name + " " + x + " " + y);
}

f1.call(obj1);