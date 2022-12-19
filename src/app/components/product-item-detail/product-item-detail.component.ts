import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {

  id: number = -1;
  product : Product | null = null;
  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    // this.route.queryParamMap.subscribe((response: Params) => {
    //   this.id = Number(response.params.get('id'));
    // })
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
    })
    // console.log('id--------------',this.id);
    this.productService.getProducts().subscribe(res =>{
      if(this.id !== -1){
        this.product = res.filter(p => p.id === this.id)[0];
      }   
    })
  }

}
