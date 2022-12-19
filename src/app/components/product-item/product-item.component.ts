import { Component, OnInit, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  // @Output()
  constructor() { 
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

}
