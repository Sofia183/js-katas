function averageWord(param) {
  let total = 0;

  for (let i = 0; i < param.length; i++) {
    if (typeof param[i] === 'number') {
      total += param[i];
    } else if (typeof param[i] === 'string') {
      total += param[i].length;
    }
  }

  return total;
}

// Ejemplo de uso:
const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
console.log(averageWord(mixedElements)); // Muestra: 39
