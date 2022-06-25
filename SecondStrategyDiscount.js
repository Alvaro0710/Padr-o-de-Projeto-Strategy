import {StrategyDiscount} from './StrategyDiscount.js'

/* @Descriptio: Esta classe é uma estrategia de desconto utilizada na classe Carrinho 
   @Author: Álvaro Damásio
   @Since: 1.0
*/


export class SecondStrategyDiscount extends StrategyDiscount{
    discount = 0

    getDiscount(Carrinho){

        const total = Carrinho.getTotal()

        if(total >= 1000){
            this.discount = 90
        }

        return total - total * (this.discount / 100)
    }
}

