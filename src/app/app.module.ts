import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {CategoriesComponent} from './categories/categories.component';
import {NaviComponent} from './navi/navi.component';
import {MainCommodityComponent} from './main-commodity/main-commodity.component';
import {CommodityDetailComponent} from './commodity-detail/commodity-detail.component';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { AdminComponent } from './admin/admin.component';
import { CommodityDetailBigComponent } from './commodity-detail-big/commodity-detail-big.component';
import { CateAdminFormComponent } from './admin/forms/cate-admin-form/cate-admin-form.component';
import { AuthComponent } from './auth/auth.component';
import { CookieService} from 'ngx-cookie-service';
import { CheckoutComponent } from './checkout/checkout.component';
import {NgxPayPalModule} from 'ngx-paypal';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    NaviComponent,
    MainCommodityComponent,
    CommodityDetailComponent,
    ShoppingCartComponent,
    FooterComponent,
    AdminComponent,
    CommodityDetailBigComponent,
    CateAdminFormComponent,
    AuthComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgxPayPalModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
