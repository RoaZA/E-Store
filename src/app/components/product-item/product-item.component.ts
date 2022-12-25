import { Component, OnInit, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartDetails } from 'src/app/models/cart';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  // @Output()
  cartProduct: CartDetails;
  productQuantity: number = 0;
  newCart: CartDetails[] =  [];
  constructor(private cartService: CartService) {
    this.product = {
      id: 0,
      name: '',
      price: 0,
      url: '',
      description: ''

    }
    this.cartProduct = {
      id: -1,
      amount:-1
    }
     this.newCart.push(this.cartProduct);
  }

  ngOnInit(): void {
    console.log("this.productQuantity----------------",this.productQuantity);
  }
  addToCart(prod: Product) {
    ///var cart = ObjectMapper.Map<CartDetails, Product>(prod);
    // const prodKeys = Object.keys(prod);
    // for( let index in prodKeys )
    //   prod[index] = prod.name;
    // get cart products to add the new product 
    const cartProducts = this.cartService.getCarDetails();
    if(cartProducts.length !== 0)
    {
      this.cartProduct.id = prod.id;
      console.log("this.productQuantity",this.productQuantity);
      this.cartProduct.amount = this.productQuantity;
      cartProducts.push(this.cartProduct);
      this.cartService.pushToCart(cartProducts);
    }
    else
    {
     
      console.log("this.productQuantity",this.productQuantity);
      this.newCart[0].id =  prod.id;
      this.newCart[0].amount = this.productQuantity;
      this.cartService.pushToCart(this.newCart);
    }

  }
}
