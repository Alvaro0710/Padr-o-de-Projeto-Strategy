

class Carrinho {
     discount = 0
     products = []

    setDiscount(newDiscount){
        this.discount = newDiscount
    }

    addProduct(product){
        this.products.push(product)
    }

    getProducts() {
        return this.products
    }

    getTotal() {
        return this.products.reduce( (sum, product) => sum + product.price, 0 )
    }

    getTotalWithDiscount() {
        //Sem utilizar o pattern de strategy
        const total = this.getTotal()

        if(total >= 100 && total < 200){
            this.setDiscount(10)
        }
        if(total >= 201 && total < 300){
            this.setDiscount(20)
        }
        if(total >= 301 && total < 400){
            this.setDiscount(30)
        }
        if(total >= 401 && total < 500){
            this.setDiscount(40)
        }
        if(total >= 501 && total < 600){
            this.setDiscount(50)
        }
        if(total >= 601 && total < 700){
            this.setDiscount(60)
        }


        return total - total * (this.discount / 100)
    }
}    

const cart = new Carrinho()
cart.addProduct({name: "sabao", price :35})
cart.addProduct({name: "pao", price : 500})
cart.addProduct({name: "shampoo", price :85})
console.log(cart.getTotal())


