import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CommodityElement} from '../modules/commodityElement';
import {CommodityElementService} from '../core/commodity-element.service';
import {SingleCommoResponse} from '../modules/singleCommoResponse';

@Component({
  selector: 'app-commodity-detail-big',
  templateUrl: './commodity-detail-big.component.html',
  styleUrls: ['./commodity-detail-big.component.css']
})
export class CommodityDetailBigComponent implements OnInit {

  singleCommoResponse: SingleCommoResponse;

  constructor(
    private commodityElementService: CommodityElementService,
    private router: ActivatedRoute,
    ) {
  }

  ngOnInit() {
    this.getCommodityDetail();
  }

  getCommodityDetail(): void {
    const commodityId = this.router.snapshot.paramMap.get('id');
    this.commodityElementService.getCommodityElement(commodityId).subscribe(
      element => this.singleCommoResponse = element
    );
  }

}
