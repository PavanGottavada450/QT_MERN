var a = 10;

function testScope(){
    let b = 11;
    const c = 12;
    var d = 13;

    console.log(a);
    console.log(b);
    console.log(c);
}

testScope();

console.log(a);
// console.log(b);
// console.log(c);
console.log(d);



