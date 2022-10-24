import { Injectable } from '@angular/core';
import {Product} from './product';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
    {
      id: 1,
      name: 'Thit ga',
      description: 'Ngon vl'
    },
    {
      id: 2,
      name: 'Thit bo',
      description: 'Rat ngon'
    },
    {
      id: 3,
      name: 'Thit trau',
      description: 'Ko ngon'
    }
  ];
  product: Product = {

  };
  getAllProduct() {
    return this.products;
  }
  getProduct() {
    return this.product;
  }
  findProduct(pr: any) {
    return this.product = pr;
  }

  saveProduct(product: any) {
    this.products.push(product);
  }

  updateProduct(product: any , id: number) {
    for (let i = 0; i < this.products.length; i++) {
      // tslint:disable-next-line:triple-equals
      if (this.products[i].id == product.id) {
        this.products[i] = product;
      }
    }
  }

  deleteProduct(product: any) {
    const index = this.products.indexOf(product);
    this.products.splice(index, 1);
  }
  constructor() { }
}
