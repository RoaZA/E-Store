import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';
import { ActivatedRoute, Router } from "@angular/router";
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {

  id: number = -1;
  product: Product | null = null;
  productQuantity: number = 0;
  constructor(private route: ActivatedRoute, private productService: ProductService, private cartService: CartService) { }

  ngOnInit(): void {
    // this.route.queryParamMap.subscribe((response: Params) => {
    //   this.id = Number(response.params.get('id'));
    // })
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
    })

    this.productService.getProducts().subscribe(res => {
      if (this.id !== -1) {
        this.product = res.filter(p => p.id === this.id)[0];
      }
    })
  }
  addToCart(prod: Product) {
    // get cart products to add the new product 
    this.cartService.pushToCart(prod.id, this.productQuantity);
  }

}
