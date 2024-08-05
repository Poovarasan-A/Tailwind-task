//Event loop allows JavaScript to perform non-blocking operations, despite being single-threaded  it is infinite loop
//Event loop pushes the task to call stack from the task queue

//Callback
//callback queue or task queue
//event loop

//Call stack is a data structure and an order of execution
//operates on a Last In First Out basis
//when code executed, function called and pushed onto the call stack and when it returns get popped off from the stack
//the function on top of the stach executed first

//Task Queue is waiting to be run once the callstack is empty

console.log("start");

function m1() {
  setTimeout(() => {
    console.log("Its m1");
  }, 5000);
}

function m2() {
  m1();
  console.log("m2 func");
}

m2();

console.log("end");
