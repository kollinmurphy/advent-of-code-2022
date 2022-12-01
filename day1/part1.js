import fs from 'fs'

const input = fs.readFileSync('input.txt', 'utf8')

const numbers = input.split('\n').map(Number)
const elves = numbers.reduce((elves, number) => {
  if (number > 0)
    elves[elves.length - 1].push(number)
  else
    elves.push([])
  return elves
}, [[]])

const totals = elves.map(elf => elf.reduce((total, number) => total + number, 0))
const max = Math.max(...totals)
console.log(max)
