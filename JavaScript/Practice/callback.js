function fn(callback){
    console.log("fn called");
    callback();
}

function a(){
    console.log("callback fn called");
    
}

fn(a);