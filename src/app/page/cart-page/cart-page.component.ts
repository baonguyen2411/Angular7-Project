import { Component, OnInit } from '@angular/core';
import { JuiceAndCakeService } from '../../service/juice-and-cake.service';


@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {

  constructor(private juiceAndCakeService: JuiceAndCakeService) { }

  ngOnInit() {
  }

}
