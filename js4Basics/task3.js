const number = 6;

console.log("Multiplication table using for:");

for (let i = 1; i <= 10; i++) {
  console.log(`${number} x ${i} = ${number * i}`);
}

console.log("Multiplication table using while:");

let i = 1;

while (i <= 10) {
  console.log(`${number} x ${i} = ${number * i}`);
  i++;
}

