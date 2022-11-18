import { Component, OnInit } from '@angular/core';
import { GetTheProductToCartService } from '../get-the-product-to-cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private _GetTheProductToCartService: GetTheProductToCartService) { }

  public product: any = [];
  public TotalPrice: number = 0;

  ngOnInit(): void {

    this._GetTheProductToCartService.getTheProduct().subscribe(res => {

      this.product = res;
      this.TotalPrice = this._GetTheProductToCartService.getTotalPrice();
    })
  }

  removeItem(item: any) {
    return this._GetTheProductToCartService.removeProduct(item);

  }

  emptyCart() {
    this._GetTheProductToCartService.emptyCart();

  }

}
