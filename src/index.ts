import { User } from './models/User'
import { Product } from './models/Products'
import { Comment } from './models/Comment'

const user01 = new User("01", "Mona", "MonaTechHelperFodão", "mona_grodew_pica_da_galaxia@growdev.com")

const product1 = new Product('01', 'produto1', 1)
const product2 = new Product('02', 'produto2', 2)
const product3 = new Product('03', 'produto3', 3)

user01.addToCart(product1);
user01.addToCart(product2);
console.log(user01)

user01.removeFromCart(product3)

user01.showProduts()

console.log(user01)

product1.addComment('Produto ruim nao gostei!', user01)
console.log(product1);
