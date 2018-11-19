import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CategoryResponse} from './modules/categoryResponse';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private getCateUrl = 'http://127.0.0.1:8080/api/getCate/';

  constructor(
    private http: HttpClient,
  ) {
  }

  getCategory(): Observable<CategoryResponse> {
    return this.http.get<CategoryResponse>(this.getCateUrl);
  }
}
