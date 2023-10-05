console.log(Number.isNaN());
console.log(Number.isInteger(21.2));

console.log(parseFloat("231 reais"));
console.log(parseInt(23.44, 10));

const preco = 2.99;
console.log(preco.toFixed());

const carro = 1000.455;
console.log(carro.toFixed(2));

const preco2 = 1499.49;
console.log(preco2.toFixed());

let valor = 49.59;

valor = valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

console.log(Math.abs(-5.5));
console.log(Math.ceil(4.8334));
console.log(Math.ceil(4.3));
console.log(Math.floor(4.8334));
console.log(Math.floor(4.3));
console.log(Math.round(4.8334));
console.log(Math.round(4.3));

console.log(Math.max(4, 5, 10, 15));
console.log(Math.min(4, 5, 10, 15));

const aleatorio = Math.floor(Math.random() * 10);

console.log(aleatorio);

console.log(Math.floor(Math.random() * (90 - 20 + 1)) + 20);
