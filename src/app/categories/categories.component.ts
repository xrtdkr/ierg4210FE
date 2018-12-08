import {HttpClient} from '@angular/common/http';
import {Component, Input, OnInit} from '@angular/core';
import {CategoryService} from '../core/category.service';
import {CategoryResponse} from '../modules/category/categoryResponse';
import {Observable} from 'rxjs';
import {passBoolean} from 'protractor/built/util';
import {CategoryElement} from '../modules/category/categoryElement';
import {CommonSuccess} from '../modules/common/commonSuccess';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  // cateResObservable: Observable<CategoryResponse>;
  // // cateRes: CategoryResponse;
  // cateUrl = 'localhost:8080/api/getCate';

  updateCateReq: CategoryElement; //  更新的时候请求的参数
  addCateReq: CategoryElement; // 添加的时候的请求参数
  successRes: CommonSuccess;
  cateRes: CategoryResponse; // getCategory用来接受category项目.
  deleteId: number;

  constructor(
    private categoryService: CategoryService,
  ) {
  }

  // constructor(
  //   private http: HttpClient,
  // ) {}

  ngOnInit() {
    this.getCategory();
  }

  getCategory(): void {
    this.categoryService.getCategory().subscribe((cateRes) => {
      this.cateRes = cateRes;
      console.log(this.cateRes);
    });
    // this.cateList = this.cateRes.data;
  }

  updateCategory(): void {
    this.categoryService.updateCategory(this.updateCateReq).subscribe((cateRes) => {
      this.successRes = cateRes;
      console.log(this.successRes);
    });
  }

  addCategory(): void {
    this.categoryService.updateCategory(this.addCateReq).subscribe( (cateRes) => {
      this.successRes = cateRes;
      console.log(this.cateRes);
    });
  }

  deleteCategory(): void {
    this.categoryService.deleteCategory(this.deleteId).subscribe((cateRes) => {
      this.successRes = cateRes;
      console.log(this.cateRes);
    });
  }
}
