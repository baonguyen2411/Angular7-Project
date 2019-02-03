import { Component, OnInit } from '@angular/core';
import { JuiceAndCakeService } from './service/juice-and-cake.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private juiceAndCakeService: JuiceAndCakeService) {}

  ngOnInit(): void {
    this.getCart();
  }

  protected getCart(): void {
    this.juiceAndCakeService.getCart().subscribe(product => {
      this.juiceAndCakeService.cart = product;
    });
  }
}
