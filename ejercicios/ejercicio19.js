const toys = [
  { id: 5, name: 'Buzz MyYear' }, 
  { id: 11, name: 'Action Woman' }, 
  { id: 23, name: 'Barbie Man' }, 
  { id: 40, name: 'El gato con Guantes' },
  { id: 40, name: 'El gato felix' }
];

// Usamos un bucle for para recorrer el array y eliminar los juguetes que incluyan "gato"
for (let i = 0; i < toys.length; i++) {
  if (toys[i].name.toLowerCase().includes('gato')) {
    toys.splice(i, 1);
    i--; // Reducimos el índice para no saltarnos ningún elemento
  }
}

console.log(toys);
