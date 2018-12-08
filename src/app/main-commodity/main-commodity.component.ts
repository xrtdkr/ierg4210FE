import {Component, OnInit} from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import {MainCommodityService} from '../core/main-commodity.service';
// import {MainCommodityResponse} from '../modules/mainCommodityResponse';
import {CommodityResponse} from '../modules/commodity/commodityResponse';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';


@Component({
  selector: 'app-main-commodity',
  templateUrl: './main-commodity.component.html',
  styleUrls: ['./main-commodity.component.css']
})
export class MainCommodityComponent implements OnInit {

  commodityResponse: CommodityResponse;

  constructor(
    private router: ActivatedRoute,
    private mainCommodityService: MainCommodityService,
    private location: Location,
  ) {
  }

  ngOnInit() {
    this.getCommodityIds();
  }

  getCommodityIds(): void {
    const categoryId = this.router.snapshot.paramMap.get('id');
    this.mainCommodityService.getMainCommodityService(categoryId.toString()).subscribe(
      (totalCommodityRes) => this.commodityResponse = totalCommodityRes
    );
    // this.mainCommodityIds = this.mainCommodityResponse.data;
  }
}
