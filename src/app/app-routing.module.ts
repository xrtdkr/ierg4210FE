import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainCommodityComponent} from './main-commodity/main-commodity.component';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: 'index/1', pathMatch: 'full'},
  {path: 'index/:id', component: MainCommodityComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
