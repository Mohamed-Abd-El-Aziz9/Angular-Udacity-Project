import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Product from 'product';
import { map, Observable } from 'rxjs';



HttpClient
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  LocalAPIObject = 'assets/data.json';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.LocalAPIObject).pipe(map((res:any)=> {
      return res ;
    }));
  }

}

