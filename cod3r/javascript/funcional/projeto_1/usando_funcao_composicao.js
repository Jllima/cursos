const path = require('path')
const fn = require('./functions')

const path_legends = path.join(__dirname, '..', 'legendas')

const symbols = [
  '.','?','-',',','"','♪',
  '_','<i>','</i>','\r','[',']',
  '(',')'
]

const palavreasMaisUsadas = fn.composite(
  fn.readDir,
  fn.elementsEndingWith('.srt'),
  fn.readFiles,
  fn.joinContent,
  fn.splitTextBy('\n'),
  fn.removeEmptyElements,
  fn.removeIfInclude('-->'),
  fn.removeIfOnlyNumbers,
  fn.removeSymbols(symbols),
  fn.joinContent,
  fn.splitTextBy(' '),
  fn.removeEmptyElements,
  fn.removeIfOnlyNumbers,
  fn.groupByElements,
  fn.orderByElements('qtd', 'desc')
)

palavreasMaisUsadas(path_legends)
  .then(console.log)
