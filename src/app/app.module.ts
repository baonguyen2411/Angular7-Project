import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import {NgsRevealModule} from 'ngx-scrollreveal';
import { JuiceCakeComponent } from './page/_component/juice-cake/juice-cake.component';
import { JuiceAndCakeService } from './service/juice-and-cake.service';
import { HttpClientModule }    from '@angular/common/http';
import { CartPageComponent } from './page/cart-page/cart-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    JuiceCakeComponent,
    CartPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgsRevealModule,
    HttpClientModule
  ],
  providers: [
    JuiceAndCakeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
