import {Component, Input, OnInit} from '@angular/core';
import {CommodityElementService} from '../core/commodity-element.service';
import {CommodityResponse} from '../modules/commodityResponse';
import {CommodityElement} from '../modules/commodityElement';

@Component({
  selector: 'app-commodity-detail',
  templateUrl: './commodity-detail.component.html',
  styleUrls: ['./commodity-detail.component.css']
})
export class CommodityDetailComponent implements OnInit {

  @Input() commodityElement: CommodityElement;

  constructor(
    // private commodityElementService: CommodityElementService,
  ) {
  }

  ngOnInit() {
    // this.getCommodityDetailById(this.commodityId);
  }

  // getCommodityDetailById(id: number) {
  //   this.commodityElementService.getCommodityElement(id.toString()).subscribe((commoRes) => this.commodityResponse = commoRes);
  // }


}
