//Declaration Function
//Its a named function and hoisted so we can call this function before the code defined
function hello() {
  console.log("This is Func. Declaration");
}

//Expression Function
//It is function defined inside an expression and can't be hoisted
let greeting = function () {
  console.log("This is Func. Expression");
};

//Arrow Function
//Consise way of writing function expressionn
const greet = () => {
  console.log("This is Arrow function");
};

//Anonymous Function
//Defined without a name and passed as arguements for other functions
setTimeout(() => {
  console.log("This is Anonymous Function");
}, 1000);

//Immediately Invoked Expression Fucntion
//function can be executed immediately after their creation
(function () {
  console.log(" This is IIEF function");
})();

//Async Function
//special type of function that returns a promise, allow use of await to pause execution until the promise resolved
async function fetch() {
  const response = await fetch("url");
  const data = await response.json();
  console.log(data);
}
