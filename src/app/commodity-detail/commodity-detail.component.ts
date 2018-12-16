import {Component, Input, OnInit} from '@angular/core';
import {CommodityElementService} from '../core/commodity-element.service';
import {CommodityResponse} from '../modules/commodity/commodityResponse';
import {CommodityElement} from '../modules/commodity/commodityElement';
import {ShoppingCartService} from '../core/shopping-cart.service';

@Component({
  selector: 'app-commodity-detail',
  templateUrl: './commodity-detail.component.html',
  styleUrls: ['./commodity-detail.component.css']
})
export class CommodityDetailComponent implements OnInit {

  @Input() commodityElement: CommodityElement;

  constructor(
    private shoppingCartService: ShoppingCartService,
  ) {
  }

  ngOnInit() {
    // this.getCommodityDetailById(this.commodityId);
  }

  addCartProd(pid: number): void {
    this.shoppingCartService.addCartProd(pid).subscribe(
      () => location.reload()
    );
  }

}
