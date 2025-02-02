// Async/Await = Async = makes a function return a Promise
//               Await = makes a an async function wait for a Promise

//               Allows you write asynchronous code in a synchronous manner
//               Async doesn't have resolve or reject parameters
//               Everything after Await is placed in an event queue



function walkDog() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const dogWalk = true;
  
        if (dogWalk) {
          resolve("You walk the dog 🐕");
        } else {
          reject("You didn't walk the dog 🐕");
        }
      }, 1500);
    });
  }
  
  function cleanKitchen() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const kitchen = true;
  
        if (kitchen) {
          resolve("You clean the Kitchen 🧹");
        } else {
          reject("You didn't clean the Kitchen 🧹");
        }
      }, 2500);
    });
  }
  
  function takeoutTrash() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const trash = true;
  
        if (trash) {
          resolve("You take out the trash 🗑️");
        } else {
          reject("You didn't take out the trash 🗑️");
        }
      }, 2500);
    });
  }
  
async function doChores(){
    try{
        const walkDogResult = await walkDog();
        console.log(walkDogResult);
        
        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);

        const takeoutTrashResult = await takeoutTrash();
        console.log(takeoutTrashResult);
    }
    catch(error){
        console.log(error);
        
    }
    
}

doChores();