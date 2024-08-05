//closure is a javascript feature where an inner function has access to its own scope,
// the outer function's scope, and the global scope

function outer(name) {
  let outerVar = "Bun";

  function inner() {
    let innerVar = "Butter";
    console.log(innerVar);
    console.log(outerVar);
    console.log("Hello", name);
  }
  return inner;
}

let call1 = outer("jam");
call1();

let call2 = outer("sauce");
call2();
