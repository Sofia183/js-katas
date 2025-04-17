const placesToTravel = [
  { id: 5, name: 'Japan' },
  { id: 11, name: 'Venecia' },
  { id: 23, name: 'Murcia' },
  { id: 40, name: 'Santander' },
  { id: 44, name: 'Filipinas' },
  { id: 59, name: 'Madagascar' }
];

// Usamos un bucle for para recorrer el array y eliminar los elementos con id 11 y 40
for (let i = 0; i < placesToTravel.length; i++) {
  if (placesToTravel[i].id === 11 || placesToTravel[i].id === 40) {
    placesToTravel.splice(i, 1);
    i--; // Importante: Reducimos el índice porque el array se acorta
  }
}

// Mostramos el array actualizado
console.log(placesToTravel);
