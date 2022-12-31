import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:3000/assets/data.json');
  }
  savePeoducts(prds: Product[]) {
    sessionStorage.setItem('products', JSON.stringify(prds));
  }
  getProductsFrom(): Product[] {
    const stringProducts = sessionStorage.getItem('products');
    if (stringProducts)
      return JSON.parse(stringProducts);
    else
      return [];

  }

}
