import { Injectable } from '@angular/core';
// import { strict } from 'assert';
import { CartDetails } from '../models/cart';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // cart: CartDetails[] = [];
  constructor() { }

  getCarDetails(): CartDetails[] {
    const stringCart = sessionStorage.getItem('cart');
    if (stringCart)
      return  JSON.parse(stringCart);
    else
      return [];

  }

  pushToCart(cartDetails: CartDetails[]) {
    //console.log(cartDetails);
    //const tempCart :Product[] = this.getCarDetails();
    //tempCart.push(cartDetails);
    sessionStorage.setItem('cart', JSON.stringify(cartDetails));
    console.log(JSON.stringify(cartDetails));
  }
}
