const a = {name: "Teste"};

console.log(a);

const b = a;

console.log(b);

b.name = "Opa";

console.log(a);

let c = 3;
let d = c;

console.log(d++);

let valor;
console.log(valor);

valor = null; //ausencia de valor

console.log(valor);

const produto = {};
console.log(produto.preco);
console.log(produto);

produto.preco = 3.50;

console.log(produto);

produto.preco = undefined;
console.log(!!produto.preco);
delete produto.preco
console.log(produto);

produto.preco = null;
console.log(!!produto.preco);
console.log(produto);