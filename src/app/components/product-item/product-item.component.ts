import { Component, OnInit, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  // @Output()
  productQuantity: number = 0;

  constructor(private cartService: CartService) {
    this.product = {
      id: 0,
      name: '',
      price: 0,
      url: '',
      description: ''

    }

  }

  ngOnInit(): void {
  }
  addToCart(prod: Product) {
    ///var cart = ObjectMapper.Map<CartDetails, Product>(prod);
    // const prodKeys = Object.keys(prod);
    // for( let index in prodKeys )
    //   prod[index] = prod.name;
    // get cart products to add the new product 
    this.cartService.pushToCart(prod.id, this.productQuantity);
    this.productQuantity = 0;

  }
}
