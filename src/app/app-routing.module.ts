import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CategoriesComponent} from './categories/categories.component';
import {MainCommodityComponent} from './main-commodity/main-commodity.component';
import {RouterModule, Routes} from '@angular/router';
import {CommodityDetailBigComponent} from './commodity-detail-big/commodity-detail-big.component';
import {AdminComponent} from './admin/admin.component';
import {AuthComponent} from './auth/auth.component';
import {CheckoutComponent} from './checkout/checkout.component';


const routes: Routes = [
  {path: '', redirectTo: 'index/1', pathMatch: 'full'},
  {path: 'index/:id', component: MainCommodityComponent},
  {path: 'detail/:id', component: CommodityDetailBigComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'auth/:id', component: AuthComponent},
  {path: 'checkout', component: CheckoutComponent},
  // {path: 'index/:id', outlet: 'cat', component: CategoriesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
