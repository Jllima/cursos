const carrinho = [
  { nome: 'Caneta', qtd: 10, preco: 7.99, fragil: true },
  { nome: 'Impressora', qtd: 1, preco: 649.50, fragil: true },
  { nome: 'Caderno', qtd: 4, preco: 27.10, fragil: false },
  { nome: 'Lapis', qtd: 3, preco: 5.82, fragil: false },
  { nome: 'Tesoura', qtd: 1, preco: 19.20, fragil: true },
]

// 1 produtos frageis -> função filter
const frageis = item => item.fragil
const produtosFrageis = carrinho.filter(frageis)
//console.log(produtosFrageis);

// total dos produtos frageis -> função map
const getTotal = item => item.qtd * item.preco
const totalPrecoFrageis = produtosFrageis.map(getTotal)
//console.log(totalPrecoFrageis);

// calcular a media -> função reduce
const soma = (acc, ele) => acc + ele
const totalSomado = totalPrecoFrageis.reduce(soma)
//console.log(totalSomado);

const media = totalSomado/totalPrecoFrageis.length
//console.log(media);

// outra forma
const getMedia = (acc, ele) => {
  console.log(acc);
  console.log(ele);
  
  
  const novaQtd = acc.qtd + 1
  const novoTotal = acc.total + ele
  return {
    qtd: novaQtd,
    total: novoTotal,
    media: novoTotal / novaQtd
  } 
}

const media2 = carrinho
                .filter(frageis)
                .map(getTotal)
                .reduce(getMedia, { qtd: 0, total: 0, media: 0 })

console.log(media2);

