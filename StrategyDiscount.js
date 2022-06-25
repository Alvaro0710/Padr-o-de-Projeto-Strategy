

/* @Descriptio: Esta classe concreta tem a função de criar um molde para os Strategias de Desconto
   @Author: Álvaro Damásio
   @Since: 1.0
*/
export class StrategyDiscount{

    //É a SuperClasse que modela as strategias de Desconto
    discount = 0

    getDiscount(Carrinho ) {
        return Carrinho.getTotal()
    }
}