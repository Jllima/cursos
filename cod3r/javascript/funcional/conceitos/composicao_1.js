// Executar funcoes de forma sincrona
function composite(...fns){
  return valor => {
    return fns.reduce(async (acc, fn) => {
      if(Promise.resolve(acc) === acc){
        return fn(await acc)
      } else {
        return fn(acc)
      }
    }, valor)
  }
}

function upCase(text){
  return text.toUpperCase()
}

function bang(text){
  return `${text}!!!!`
}

function slowDown(text){
  return new Promise(resolve => {
    setTimeout(()=>{
      resolve(text.split('').join(' '))
    }, 3000)
  })
}

const resultComposite1 = composite(
  upCase,
  bang,
  slowDown
)
resultComposite1('stop')
  .then(console.log)

// Utilizando curring para utilizar versoes intermediarias da funcao

const resultComposite2 = composite(
  upCase,
  bang
)

resultComposite2('stop now')
  .then(console.log)

