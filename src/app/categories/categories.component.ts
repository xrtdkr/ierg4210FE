import {HttpClient} from '@angular/common/http';
import {Component, Input, OnInit} from '@angular/core';
import {CategoryService} from '../core/category.service';
import {CategoryResponse} from '../modules/categoryResponse';
// import {MOCKCATERES} from '../modules/mock-cateRes';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  // cateResObservable: Observable<CategoryResponse>;
  // // cateRes: CategoryResponse;
  // cateUrl = 'localhost:8080/api/getCate';
  cateRes: CategoryResponse;

  constructor(
    private categoryService: CategoryService,
  ) {
  }

  // constructor(
  //   private http: HttpClient,
  // ) {}

  ngOnInit() {
    this.getCategoryComponent();
  }

  getCategoryComponent(): void {
    this.categoryService.getCategory().subscribe((cateRes) => {
      this.cateRes = cateRes;
      console.log(this.cateRes);
    });
    // this.cateList = this.cateRes.data;
  }
}
