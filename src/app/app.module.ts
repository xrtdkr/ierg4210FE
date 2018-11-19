import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CategoriesComponent} from './categories/categories.component';
import {NaviComponent} from './navi/navi.component';
import {MainCommodityComponent} from './main-commodity/main-commodity.component';
import {CommodityDetailComponent} from './commodity-detail/commodity-detail.component';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    NaviComponent,
    MainCommodityComponent,
    CommodityDetailComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
