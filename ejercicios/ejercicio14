function repeatCounter(param) {
  // Creamos un objeto vacío donde almacenaremos las repeticiones de las palabras
  let wordCount = {};

  // Iteramos sobre el array
  param.forEach(word => {
    // Si la palabra ya está en el objeto, incrementamos su contador
    if (wordCount[word]) {
      wordCount[word]++;
    } else {
      // Si no está en el objeto, la añadimos con valor 1
      wordCount[word] = 1;
    }
  });

  // Devolvemos el objeto con las repeticiones de cada palabra
  return wordCount;
}

// Ejemplo de uso:
const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
];

console.log(repeatCounter(counterWords));
