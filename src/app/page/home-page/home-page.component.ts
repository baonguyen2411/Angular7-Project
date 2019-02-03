import { Component, OnInit, OnDestroy } from '@angular/core';
import { JuiceAndCakeService } from '../../service/juice-and-cake.service';
import { JuiceAndCake } from '../../models/juice-and-cake';
import { Cart } from 'src/app/models/cart';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {
  public juiceFruit: JuiceAndCake[] = [];
  public cakes: JuiceAndCake[] = [];

  constructor(private juiceAndCakeService: JuiceAndCakeService) { }

  ngOnInit() {
    this.setJuiceFruit();
    this.setCakes();
  }

  ngOnDestroy(): void {
  }

  protected setJuiceFruit(): void {
    this.juiceAndCakeService.getJuiceFruit().subscribe(juice => {
      this.juiceFruit = juice;
    });
  }

  protected setCakes(): void {
    this.juiceAndCakeService.getCakes().subscribe(cake => {
      this.cakes = cake;
    });
  }

  public addToCart(product: Cart) {
    let cart: Cart[] = this.juiceAndCakeService.cart;
    let updateProduct: Cart =  null;
    let isUpdate: boolean = false;
    cart.forEach(element => {
      if (element.productId === product.productId) {
        isUpdate = true;
        updateProduct = element;
        updateProduct.amout++;
      }
    });

    if (isUpdate) {
      this.juiceAndCakeService.updateCart(updateProduct).subscribe(product => {
        console.log(`Update to cart success: ${JSON.stringify(product)}`);
      });
    } else {     
      this.juiceAndCakeService.addCart(product).subscribe(product => {
        this.juiceAndCakeService.cart.push(product);
        console.log(`Add to cart success: ${JSON.stringify(product)}`);
      });
    }
  }
}
