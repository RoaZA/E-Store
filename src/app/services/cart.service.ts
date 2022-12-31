import { Injectable } from '@angular/core';
// import { strict } from 'assert';
import { CartDetails } from '../models/cart';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartProduct: CartDetails;
  newCart: CartDetails[] = [];
  constructor() {

    this.cartProduct = {
      id: -1,
      amount: -1
    }
    this.newCart.push(this.cartProduct);
  }
  getCarDetails(): CartDetails[] {
    const stringCart = sessionStorage.getItem('cart');
    if (stringCart)
      return JSON.parse(stringCart);
    else
      return [];

  }

  pushToCart(prodId: number, amount: number) {
    const cartProducts = this.getCarDetails();
    if (cartProducts.length === 0) {
      this.newCart[0].id = prodId;
      this.newCart[0].amount = amount;
      //sessionStorage.clear();
      sessionStorage.setItem('cart', JSON.stringify(this.newCart));
      alert('New Product  has been added to the cart');

    }
    else {
      let itemFound = false;
      for (let i = 0; i < cartProducts.length; i++) {
        if (cartProducts[i].id === prodId) {
          cartProducts[i].amount += amount;
          itemFound = true;
          alert('a Product amount has been modified');
          break;
        }
      }
      if (!itemFound) {
        this.cartProduct.id = prodId;
        this.cartProduct.amount = amount;
        alert('New Product  has been added to the cart');
        cartProducts.push(this.cartProduct);
      }

      //sessionStorage.clear();
      sessionStorage.setItem('cart', JSON.stringify(cartProducts));
    }

  }
}
