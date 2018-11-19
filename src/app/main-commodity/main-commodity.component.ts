import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MainCommodityService} from '../main-commodity.service';
// import {MainCommodityResponse} from '../modules/mainCommodityResponse';
import {CommodityResponse} from '../modules/commodityResponse';

@Component({
  selector: 'app-main-commodity',
  templateUrl: './main-commodity.component.html',
  styleUrls: ['./main-commodity.component.css']
})
export class MainCommodityComponent implements OnInit {

  commodityResponse: CommodityResponse;

  constructor(
    private mainCommodityService: MainCommodityService,
  ) { }

  ngOnInit() {
    this.getCommodityIds(1);
  }

  getCommodityIds(categoryId: number) {
    this.mainCommodityService.getMainCommodityService(categoryId.toString()).subscribe(
      (totalCommodityRes) => this.commodityResponse = totalCommodityRes
    );
    // this.mainCommodityIds = this.mainCommodityResponse.data;
  }
}
