import { getLocaleDateFormat } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Product from 'product';
import { ProductService } from '../get-product-servises.service';
import { GetTheProductToCartService } from '../get-the-product-to-cart.service';



@Component({
  selector: 'app-home',
  templateUrl: './Product.component.html',
  styleUrls: ['./Product.component.css']
})
export class  ProductComponent implements OnInit {

  constructor(private Http: HttpClientModule, private _ProductService: ProductService, private _GetTheProductToCartService: GetTheProductToCartService) { }

  quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  quantity: number = 3;

  public list : any ;




  ngOnInit(): void {
    this._ProductService.getProducts().subscribe((data) => {
      this.list = data;

      this.list.forEach(( a: any )=> {

        Object.assign(a, {quantity : 1 , total : a.price}); 
      })
    });

    
  }

  addItemToCart(product: any) {
    this._GetTheProductToCartService.addToCart(product);
  }
  

}
