import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CategoryResponse} from '../modules/category/categoryResponse';
import {CommonSuccess} from '../modules/common/commonSuccess';
import {CategoryElement} from '../modules/category/categoryElement';
import {Configs} from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  HOST = Configs.prodHost;

  private getCateUrl = this.HOST + '/api/getCate/';
  private addCateUrl = this.HOST + '/api/category/add/';
  private updateCateUrl = this.HOST + '/api/category/update/';
  private deleteCateUrl = this.HOST + '/api/category/delete/';

  constructor(
    private http: HttpClient,
  ) {
  }

  getCategory(): Observable<CategoryResponse> {
    return this.http.get<CategoryResponse>(this.getCateUrl, {withCredentials: true});
  }

  addCategory(cateEle: CategoryElement): Observable<CommonSuccess> {
    const formData = new FormData();   // 有可能出纰漏的点： 这个可能是不可变变量
    formData.append('name', cateEle.name);
    formData.append('description', cateEle.description);
    return this.http.post<CommonSuccess>(this.addCateUrl, cateEle, {withCredentials: true});
  }

  updateCategory(caleEle: CategoryElement): Observable<CommonSuccess> {
    const formData = new FormData();
    formData.append('id', caleEle.id.toString());
    formData.append('name', caleEle.name);
    formData.append('description', caleEle.description);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'multipart/form-data',
      }), withCredentials: true
    };
    return this.http.post<CommonSuccess>(this.updateCateUrl, formData, httpOptions);
  }

  deleteCategory(id: number): Observable<CommonSuccess> {
    return this.http.post<CommonSuccess>(this.deleteCateUrl, {'id': id}, {withCredentials: true});
  }

}
