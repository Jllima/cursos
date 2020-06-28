const path = require('path')
const fn = require('./functions')

const path_legends = path.join(__dirname, '..', 'legendas')

const symbols = [
  '.','?','-',',','"','♪',
  '_','<i>','</i>','\r','[',']',
  '(',')'
]

fn.readDir(path_legends)
  .then(files => fn.elementsEndingWith(files, '.srt'))
  .then(filesSRT => fn.readFiles(filesSRT))
  .then(fn.joinContent)
  .then(fn.splitTextBy('\n'))
  .then(fn.removeEmptyElements)
  .then(fn.removeIfInclude('-->'))
  .then(fn.removeIfOnlyNumbers)
  .then(fn.removeSymbols(symbols))
  .then(fn.joinContent)
  .then(fn.splitTextBy(' '))
  .then(fn.removeEmptyElements)
  .then(fn.removeIfOnlyNumbers)
  .then(fn.groupByElements)
  .then(fn.orderByElements('qtd', 'desc'))
  .then(console.log)
