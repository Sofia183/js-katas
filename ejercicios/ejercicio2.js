// 1.1 Cambiar el valor de la propiedad 'age' a 25
const character = { name: 'Jack Sparrow', age: 10 };
character.age = 25;
console.log(character); // { name: 'Jack Sparrow', age: 25 }

// 1.2 Declarar variables y mostrar un mensaje
let firstName = 'Jon';
let lastName = 'Snow';
let age = 24;
console.log(`Soy ${firstName} ${lastName}, tengo ${age} años y me gustan los lobos.`);

// 1.3 Sumar los precios de dos juguetes
const toy1 = { name: 'Buss myYear', price: 19 };
const toy2 = { name: 'Rallo mcKing', price: 29 };
let totalPrice = toy1.price + toy2.price;
console.log(`El precio total de los juguetes es: ${totalPrice}€`);

// 1.4 Actualizar precios de coches
let globalBasePrice = 10000;
globalBasePrice = 25000;
const car1 = { name: 'BMW m&m', basePrice: 50000, finalPrice: 60000 };
const car2 = { name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000 };
car1.finalPrice = car1.basePrice + globalBasePrice;
car2.finalPrice = car2.basePrice + globalBasePrice;
console.log(car1);
console.log(car2);
