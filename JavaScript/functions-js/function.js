function f1(){
    console.log('f1 is called')
}

function add(x){
    x()
}

add(f1);

add(function f3(){
    console.log("f3 is called")
});

add(function(){
    console.log("eluru")
})

add(()=>{
    console.log("arrow function")
})