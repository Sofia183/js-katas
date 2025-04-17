// Ejercicio 1.1: Obtener el valor "HULK" del array y mostrarlo por consola
const avengers1 = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers1[0]); // Muestra: HULK

// Ejercicio 1.2: Cambiar el primer elemento de avengers a "IRONMAN"
const avengers2 = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
avengers2[0] = "IRONMAN";
console.log(avengers2); // Muestra: ["IRONMAN", "SPIDERMAN", "BLACK PANTHER"]

// Ejercicio 1.3: Mostrar el número de elementos en el array usando la propiedad correcta
const avengers3 = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers3.length); // Muestra: 3

// Ejercicio 1.4: Añadir "Morty" y "Summer" al array y mostrar el último personaje
const rickAndMortyCharacters1 = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters1.push("Morty", "Summer");
console.log(rickAndMortyCharacters1[rickAndMortyCharacters1.length - 1]); // Muestra: Summer

// Ejercicio 1.5: Eliminar el último elemento del array y mostrar el primero y el último por consola
const rickAndMortyCharacters2 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters2.pop(); // Elimina "Lapiz Lopez"
console.log(rickAndMortyCharacters2[0]); // Muestra: Rick
console.log(rickAndMortyCharacters2[rickAndMortyCharacters2.length - 1]); // Muestra: Summer

// Ejercicio 1.6: Eliminar el segundo elemento del array y mostrar el array por consola
const rickAndMortyCharacters3 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters3.splice(1, 1); // Elimina "Beth"
console.log(rickAndMortyCharacters3); // Muestra: ["Rick", "Jerry", "Morty", "Summer", "Lapiz Lopez"]
