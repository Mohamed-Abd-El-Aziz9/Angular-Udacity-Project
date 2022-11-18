import { Injectable } from '@angular/core';
import Product from 'product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetTheProductToCartService {


  public ItemCart: Product[] = [];
  public ListOfProduct = new BehaviorSubject<any>([]);

  constructor() { }

  getTheProduct() {

    return this.ListOfProduct.asObservable();
  }

  setTheProduct(product: any) {
    this.ItemCart.push(...product);
    this.ListOfProduct.next(product);
  }


  addToCart(product: any) {
    this.ItemCart.push(product);
    this.ListOfProduct.next(this.ItemCart);
    this.getTotalPrice();
    alert("Product Added successfully!")
  }
  getTotalPrice() :number {

    let fullTotal = 0;
    this.ItemCart.map((a: any) => {

      fullTotal += a.price;
    })
    return fullTotal ; 
  }


  removeProduct(product: any) {

    this.ItemCart.map((a: any, indexedDB: any) => {

      if (product.id == a.id) {

        this.ItemCart.splice(indexedDB,1); 
      }
    })
  }

  emptyCart () {
    this.ItemCart =  [] ; 
    this.ListOfProduct.next(this.ItemCart) ; 
  }
}
