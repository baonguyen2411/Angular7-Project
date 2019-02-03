import { Injectable } from '@angular/core';
import { JuiceAndCake } from '../models/juice-and-cake';
import { Cart } from '../models/cart';
import { Observable, of} from 'rxjs';
import { catchError, tap} from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JuiceAndCakeService {
  public cart: Cart[] = [];

  constructor(private http: HttpClient) { }

  getTotalProduct(): number {
    let totalProduct: number = 0;
    this.cart.forEach(product => {
      totalProduct += product.amout;
    });
    return totalProduct;
  }

  getJuiceFruit(): Observable<JuiceAndCake[]> {
    let url: string = 'http://localhost:3000/products?type=juice';
    return this.http.get<JuiceAndCake[]>(url);
  }

  getCakes(): Observable<JuiceAndCake[]> {
    let url: string = 'http://localhost:3000/products?type=cake';
    return this.http.get<JuiceAndCake[]>(url);
  }

  getCart(): Observable<Cart[]> {
    let url: string = 'http://localhost:3000/cart';
    return this.http.get<Cart[]>(url);
  }

  addCart(product: Cart): Observable<Cart> {
    let url: string = 'http://localhost:3000/cart';
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<Cart>(url, product, httpOptions).pipe(
      tap((product: Cart) => console.log(`Add to cart: ${product}`)),
      catchError(error => of(new Cart()))
    );
  }

  updateCart(product: Cart): Observable<Cart> {
    let url: string = 'http://localhost:3000/cart';
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.put<Cart>(`${url}/${product.id}`, product, httpOptions).pipe(
      tap((updateCart: Cart) => console.log(`Update to cart: ${updateCart}`)),
      catchError(error => of(new Cart()))
    );
  }
}
