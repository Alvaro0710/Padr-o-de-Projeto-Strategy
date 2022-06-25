import { Carrinho } from "./Carrinho.js"
import {StrategyDiscount} from "./StrategyDiscount.js"

/* @Descriptio: Esta classe é uma estrategia de desconto utilizada na classe Carrinho 
   @Author: Álvaro Damásio
   @Since: 1.0
*/

export class DefaultStrategyDiscount extends StrategyDiscount{
    discount = 0

    getDiscount(Carrinho ) {

        const total = Carrinho.getTotal()

        if(total >= 100 && total < 200){
            this.discount = 10
        }
        else if(total >= 201 && total < 300){
            this.discount =20
        }
        else if(total >= 301 && total < 400){
            this.discount = 30
        }
        else if(total >= 401 && total < 500){
            this.discount =40
        }
        else if(total >= 501 && total < 600){
            this.discount = 50
        }
        else if(total >= 601 && total < 700){
            this.discount = 60
        }

        return total - total * (this.discount / 100)

    }


}

