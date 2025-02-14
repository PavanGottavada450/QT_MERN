var a = 10;

function scopeTest(){
    var b = 20;
    let c = 30;
    const d = 40;

    console.log(a);
    console.log(b);
    console.log(c);
}

scopeTest();

console.log(a);
console.log(b);
console.log(c);
console.log(d);