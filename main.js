import { Carrinho } from "./Carrinho.js"
import {DefaultStrategyDiscount} from "./DefaultStrategyDiscount.js"
import {SecondStrategyDiscount} from "./SecondStrategyDiscount.js"



const cart = new Carrinho()
cart.setDiscountStrategy(new SecondStrategyDiscount) //escolhe qual estrategia de desconto será utilizada
cart.addProduct({name: "sapato", price :100}) //adiciona um produto ao carrinho
cart.addProduct({name: "camisa", price : 400}) //adiciona um produto ao carrinho
cart.addProduct({name: "calça", price : 500}) //adiciona um produto ao carrinho
console.log( cart.getProducts()) // pega os produtos do carrinho
console.log(`total sem desconto = ${cart.getTotal()}`) // pega o valor total do carrinho
console.log( `total com desconto = ${cart.getTotalWithDiscount()}`) //pega o valor com desconto do carrinho 