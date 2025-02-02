// Promise = An Object that manages asychronous operatins.
//           Wrap a promise Object around {asynchrounous code}
//           "I promise to return a value"
//           PENDING -> RESOLVED or REJECTED
//           new Promise ((resolve,reject) => {asynchronous code})


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
      const trash = false;

      if (trash) {
        resolve("You take out the trash 🗑️");
      } else {
        reject("You didn't take out the trash 🗑️");
      }
    }, 2500);
  });
}

walkDog()
  .then((value) => {
    console.log(value);
    return cleanKitchen();
  })
  .then((value) => {
    console.log(value);
    return takeoutTrash();
  })
  .then((value) => {
    console.log(value);
    console.log("You finished all the Tasks");
  })
  .catch((error) => console.error(error));