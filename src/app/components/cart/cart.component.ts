import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/models/product';
import { CartDetails } from 'src/app/models/cart';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: Product[] = [];
  tempProducts: Product[] = [];
  cartProducts: CartDetails[] = [];
  totalPrice: number = 0;
  firstName: string = '';
  address: string = '';
  creditCard: number | string = '';

  constructor(private productService: ProductService, private cartService: CartService) {

  }

  ngOnInit(): void {

    this.tempProducts = this.productService.getProductsFrom();
    this.cartProducts = this.cartService.getCarDetails();
    if (this.cartProducts.length > 0) {
      for (let i = 0; i < this.cartProducts.length; i++) {
        let product = this.tempProducts.filter(p => p.id === this.cartProducts[i].id)[0];
        this.products.push(product);

      }
    }
    this.getTotalPrice();
  }
  showAmount(id: number): number {
    let cartProduct = this.cartProducts.filter(cp => cp.id === id)[0];
    return cartProduct.amount;
  }

  getTotalPrice(): void {
    let sum = 0;
    for (let i = 0; i < this.products.length; i++) {
      sum += this.products[i].price * this.showAmount(this.products[i].id);
    }
    this.totalPrice = sum;
  }
  onSubmit(): void {
    alert(this.firstName);
  }

}
