import { Component, OnInit } from '@angular/core';
import {Product} from "../product.model";
import {ProductService} from "../product.service";

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.sass']
})
export class ProductReadComponent implements OnInit {
  products:Product[]=[];
  public product: Product | undefined;
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.read().subscribe(products=>{
      this.products=products;
    }
    );
  }

}
