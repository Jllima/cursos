const carrinho = [
  { nome: 'Caneta', qtd: 10, preco: 7.99 },
  { nome: 'Impressora', qtd: 0, preco: 649.50 },
  { nome: 'Caderno', qtd: 4, preco: 27.10 },
  { nome: 'Lapis', qtd: 3, preco: 5.82 },
  { nome: 'Tesoura', qtd: 1, preco: 19.20 },
]
const getNome = item => item.nome
const qtdMaiorQueZero = item => item.qtd > 0

// retrona o nomes dos produtos com quantidades maiores que zero
console.log(
  carrinho
    .filter(qtdMaiorQueZero)
    .map(getNome)
);
