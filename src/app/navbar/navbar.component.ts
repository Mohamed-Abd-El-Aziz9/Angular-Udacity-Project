import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { GetTheProductToCartService } from '../get-the-product-to-cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public totalProduct: number = 0;
  constructor(private _GetTheProductToCartService: GetTheProductToCartService) { }

  ngOnInit(): void {
    this._GetTheProductToCartService.getTheProduct().subscribe(res => {

      this.totalProduct = res.length ; 
    })
  }

}
