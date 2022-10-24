import {Component, OnInit} from '@angular/core';
import {Product} from '../product';
import {ProductService} from '../product.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService) {
    this.getAllProduct();
  }
  getAllProduct() {
    this.products = this.productService.getAllProduct();
  }
  deleteProduct(product: any) {
    this.productService.deleteProduct(product);
  }
  findProduct(product: any) {
    return this.productService.findProduct(product);
  }

  ngOnInit(): void {
    this.getAllProduct();
  }

}
