var obj1 = {
    name : "pavan",
};

var obj2 = {
    name : "sai",
};

function f1(x,y){
    console.log(this.name + " " + x + " " + y);
}

f1.call(obj1,1,2);