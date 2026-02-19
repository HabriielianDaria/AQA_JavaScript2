//Function Declaration
function calculateArea(width, height) {
  return width * height;
}

console.log(calculateArea(5, 10));

//Function Expression
const calculateAreaExpression = function (width, height) {
  return width * height;
};

console.log(calculateAreaExpression(5, 10));

//Arrow Function
const calculateAreaArrow = (width, height) => width * height;

console.log(calculateAreaArrow(5, 10));
