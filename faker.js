// Installed the Faker NPM, which generates tons of fake data //

var faker = require('faker');

// Creating a for loop that prints out 10 of our items to the browser. //

console.log("------------------------");
console.log("Welcome to my gift shop!");
console.log("------------------------");

for (var i = 0; i < 10; i ++){
    console.log(faker.commerce.productName() + " - $" + faker.commerce.price());
}