const mathjs=require("mathjs")

var x= mathjs.sqrt(225)
console.log(x)

const y = mathjs.chain(4)
  .add(15)
  .multiply(3)
  .subtract(4)
  .done()
console.log(y)

const z = mathjs.chain(mathjs.pi)
  .add(5)
  .multiply(13)
  .sqrt()
  .done()
console.log(z)