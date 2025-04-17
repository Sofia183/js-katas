function finderName(array, name) {
  // Usamos el método .indexOf() para encontrar la posición del elemento
  let index = array.indexOf(name);

  // Si indexOf retorna -1, el nombre no está en el array
  if (index !== -1) {
    return {found: true, position: index}; // Si se encuentra, devuelve true y la posición
  } else {
    return {found: false}; // Si no se encuentra, devuelve false
  }
}

// Ejemplo de uso:
const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];

console.log(finderName(nameFinder, 'Tony')); // {found: true, position: 2}
console.log(finderName(nameFinder, 'John')); // {found: false}
