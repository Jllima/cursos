// somar(3)(4)(5)
function somar(num1){
  return function (num2) {
    return function(num3) {
      return console.log(num1 + num2 + num3)
    }
  }
}

somar(3)(4)(5)

// calcular(3)(7)(fn)
let multiplicar = (a, b) =>  a * b 
let somar2 = (a, b) =>  a + b 
let subtrair = (a, b) =>  a - b 

function calcular(num1) {
  return function (num2) {
    return function(fn) {
      return console.log(fn(num1, num2))
    }
  }
}
calcular(3)(7)(multiplicar)
calcular(3)(7)(somar2)
calcular(10)(7)(subtrair)

