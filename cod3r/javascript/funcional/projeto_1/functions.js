const fs = require('fs')
const path = require('path')
const { resolve } = require('path')


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

function readDir(path_files) {
  return new Promise((resolve, reject) => {
    try {
      let pathFiles = fs.readdirSync(path_files)
      pathFiles = pathFiles.map(path_file => path.join(path_files, path_file))
      resolve(pathFiles)
    } catch (error) {
      reject(error)
    }
  })
}

function elementsEndingWith(pattern){
  return array => {
    return array.filter(item => item.endsWith(pattern))
  }
}

function readFile(file){
  return new Promise((resolve, reject) => {
    try {
      const resultFile = fs.readFileSync(file, { encoding: 'utf-8' })
      resolve(resultFile.toString())
    } catch (error) {
      reject(error)
    }
  })
}

function readFiles(files){
  return Promise.all(files.map(file => readFile(file)))
}

function removeEmptyElements(files) {
  return files.filter(file => file.trim())
}

// function removeIfInclude(array, pattern){
//   return array.filter(el => !el.includes(pattern))
// }

// Refatorando metodo removeIfInclude, retornando outra função
function removeIfInclude(textualPattern) {
  // Se existir um array, o código é executado
  return array => array.filter(el => !el.includes(textualPattern))
}

function removeIfOnlyNumbers(array){
  return array.filter(el => {
    const num = parseInt(el.trim())
    return num !== num
  })
}

function removeSymbols(symbols) {
  return array => {
    return array.map(el => {
      return symbols.reduce((acc, symbol) => {
        return acc.split(symbol).join('')
      }, el)
      // let newText = el    
      // symbols.forEach(symbol => {
      //   newText = newText.split(symbol).join('')  
      // })
      // return newText
    }) 
  }
}

function joinContent(array) {
  return array.join(' ')
}

function splitTextBy(symbol) {
  return text => text.split(symbol)
}

function groupByElements(elements){
  return Object.values(elements.reduce((acc, element) => {
    const el = element.toLowerCase()  
    const qtd = acc[el] ? acc[el].qtd + 1 : 1
    acc[el] = { element: el, qtd }
    return acc
  }, {}))
}

function orderByElements(attr, order = 'asc'){
  return array => {
    const asc = (o1,o2) => o1[attr] - o2[attr]
    const desc = (o1,o2) => o2[attr] - o1[attr]
    
    return [...array].sort(order === 'asc' ? asc : desc)
  }
}

module.exports = {
  composite,
  readDir,
  elementsEndingWith,
  readFiles,
  removeEmptyElements,
  removeIfInclude,
  removeIfOnlyNumbers,
  removeSymbols,
  joinContent,
  splitTextBy,
  groupByElements,
  orderByElements
}
