import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';
import { JuiceAndCake } from '../../../models/juice-and-cake';
import { Cart } from '../../../models/cart';

@Component({
  selector: 'app-juice-cake',
  templateUrl: './juice-cake.component.html',
  styleUrls: ['./juice-cake.component.scss']
})
export class JuiceCakeComponent implements OnInit {

  @Input() products: JuiceAndCake[];
  @Output() addCart: EventEmitter<Cart> = new EventEmitter<Cart>();

  constructor() { }

  ngOnInit() {
  }

  public addToCart(product: JuiceAndCake) {
    let pd: Cart = new Cart();
    pd.productId = product.productId;
    pd.name = product.name;
    pd.price = product.price;
    pd.img = product.img;
    pd.type = product.type;
    pd.amout = 1;

    this.addCart.emit(pd);
  }
}
