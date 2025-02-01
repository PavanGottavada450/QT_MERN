// callback Hell = situation in javascript where callbacks 
//                 are nested within other callbacks to the 
//                 degree where the code is difficult to read.
//                 old patterns to handle asynchoronus functions.
//                 use Promises + async/await to avoid callback Hell.



function f1(callback) {
  setTimeout(() => {
    console.log("f1 called");
    callback();
  }, 5000);
}

function f2(callback) {
  setTimeout(() => {
    console.log("f2 called");
    callback();
  }, 2000);
}

function f3(callback) {
  setTimeout(() => {
    console.log("f3 called");
    callback();
  }, 1000);
}

function f4(callback) {
  setTimeout(() => {
    console.log("f4 called");
    callback();
  }, 6000);
}

function f5(callback) {
  setTimeout(() => {
    console.log("f5 called");
    callback();
  }, 3000);
}

f1(() => {
  f2(() => {
    f3(() => {
      f4(() => {
        f5(() => {
          console.log("All functions called");
        });
      });
    });
  });
});
