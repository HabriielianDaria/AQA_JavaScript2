const users = [
  { name: "Daria", email: "lmvm@ukr.net", age: 35 },
  { name: "Bohdan", email: "lmvm2@ukr.net", age: 35 },
  { name: "Karina", email: "lmvm3@ukr.net", age: 2 }
];

for (const { name, email, age } of users) {
  console.log(name, email, age);
};
