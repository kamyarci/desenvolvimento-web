const valorConta = 1000;
const percentualGorjeta = 10;

const valorGorjeta = valorConta * (percentualGorjeta / 100);
const valorTotal = valorConta + valorGorjeta;

console.log("Valor da conta: " + "R$ " + valorConta + ",00");
console.log("Percentual da gorjeta: " + percentualGorjeta + "%");
console.log("Valor da gorjeta: " + "R$ " + valorGorjeta + ",00");
console.log("Valor total: " + "R$ " + valorTotal + ",00");