import { Product } from "./Products"

export class User {
  constructor(private id: string, public name: string, public username: string, public email: string, private cart: Product[] = []) { }

  addToCart(product: Product): void {
    this.cart.push(product)
    console.log(this.cart);
  }
  removeFromCart(product: Product): void {
    const index = this.cart.indexOf(product)
    if (index != -1) {
      this.cart.splice(index, 1)
    }
  }
  showProduts(): void {
    this.cart.forEach(product => {
      product.show()
    });
  }
}


