const products = [
  { name: "Funko Dr. Strange", sellCount: 10 },
  { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
  { name: "Sable laser FX", sellCount: 23 },
  { name: "Varita de Voldemort", sellCount: 6 },
];

let totalSellCount = 0;

for (const product of products) {
  totalSellCount += product.sellCount;
}

console.log("Total de ventas:", totalSellCount);
