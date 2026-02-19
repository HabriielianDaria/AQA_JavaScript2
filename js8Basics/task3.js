const car1 = {
  brand: "Suzuki",
  model: "Vitara",
  year: 2017
};

const car2 = {
  brand: "Nissan",
  model: "Micra",
  owner: "Daria Habriielian"
};

const car3 = {
  ...car1,
  ...car2
};

console.log(car3);
