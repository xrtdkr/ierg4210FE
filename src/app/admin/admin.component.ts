import {Component, OnInit, Input} from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {CategoryService} from '../core/category.service';
import {CategoryResponse} from '../modules/category/categoryResponse';
import {CategoryElement} from '../modules/category/categoryElement';
import {MainCommodityService} from '../core/main-commodity.service';
import {CommonSuccess} from '../modules/common/commonSuccess';
import {THIS_EXPR} from '@angular/compiler/src/output/output_ast';
import {Router} from '@angular/router';
import {CommodityResponse} from '../modules/commodity/commodityResponse';
import {CommodityElement} from '../modules/commodity/commodityElement';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


  updateCategoryElement: CategoryElement;
  updateName = 'default name';
  updateDescription = 'default description';
  addCategoryElement: CategoryElement;
  addName = 'default name';
  addDescription = 'default description';
  categoryResponse: CategoryResponse;

  commodityResponse: CommodityResponse;
  // addCommodity = new CommodityElement(
  //   -1, 'default', -1, 'none', -1, 'none'
  // );
  addProdName = '';
  addProdCategoryID = 0;
  files: FileList;
  addProdPrice = 0;
  addProdDescription = '';

  successMsg: CommonSuccess;

  constructor(
    private httpClient: HttpClient,
    private categoryService: CategoryService,
    private mainCommodityService: MainCommodityService,
    private location: Location,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.getAllCategory();
    this.getProduction();
  }

  getAllCategory(): void {
    this.categoryService.getCategory().subscribe(
      allCate => this.categoryResponse = allCate
    );
  }

  addCategory(): void {
    const cateEle = new CategoryElement(-1, this.addName, this.addDescription);
    this.categoryService.addCategory(cateEle).subscribe(
      () => {
        this.getAllCategory();
      });
  }

  deleteCategory(id: number): void {
    this.categoryService.deleteCategory(id).subscribe(
      () => {
        this.getAllCategory();
      });
  }

  getProduction(): void {
    this.mainCommodityService.getAllCommodity().subscribe(
      commoRes => this.commodityResponse = commoRes
    );
  }

  addProduction(): void {
    this.mainCommodityService.addCommodity(
      this.addProdName,
      this.addProdCategoryID,
      this.files,
      this.addProdPrice,
      this.addProdDescription,
    ).subscribe(
      () => location.reload()
    );
  }

}
