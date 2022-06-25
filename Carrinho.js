import { StrategyDiscount } from "./StrategyDiscount.js"

/* @Descriptio: Esta classe tem a função de criar um carrinho de compras
    com seus respectivos metodos 
   @Author: Álvaro Damásio
   @Since: 1.0
*/


export class Carrinho {   
    products = []
    _discountStrategy  = new StrategyDiscount()
    
    setDiscountStrategy(discount ){
        //especifica qual estrategia de desconto será usada
        this._discountStrategy = discount
    }

    addProduct(product ) {
        //adiciona um produto ao carrimho
        this.products.push(product)
    }

    getProducts() {
        // retorna os produtos que estão no carrinho
        return this.products
    }

    getTotal() {
        //retorna o total do preço do carrinho sem desconto
        return this.products.reduce( (sum, product) => sum + product.price, 0 )
    }

    getTotalWithDiscount()  {
        //retorna o total do preço do carrinho com desconto
        return this._discountStrategy.getDiscount(this)
    }

   
} 













