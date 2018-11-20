import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CategoriesComponent} from './categories/categories.component';
import {MainCommodityComponent} from './main-commodity/main-commodity.component';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: 'index/1', pathMatch: 'full'},
  {path: 'index/:id', component: MainCommodityComponent},
  // {path: 'index/:id', outlet: 'cat', component: CategoriesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
