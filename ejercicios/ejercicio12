function removeDuplicates(param) {
  let uniqueArray = []; // Crear un array vacío para los elementos únicos

  // Recorremos el array original
  for (let i = 0; i < param.length; i++) {
    // Si el elemento no está ya en el array de elementos únicos, lo añadimos
    if (!uniqueArray.includes(param[i])) {
      uniqueArray.push(param[i]);
    }
  }

  return uniqueArray;
}

// Ejemplo de uso:
const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];
console.log(removeDuplicates(duplicates)); 
// Muestra: ['sushi', 'pizza', 'burger', 'potatoe', 'pasta', 'ice-cream', 'chicken', 'onion rings', 'soda']
