//Function Declaration
addNoDeclaration();

function addNoDeclaration() {
  console.log("Adding No. from declaration");
}

//Function Expression

let addNoExpression = function () {
  console.log("Adding No. from expression");
};

addNoExpression();

a = 20;
b = 30;
sum();

var a;
var b;
function sum() {
  console.log(a + b);
}
