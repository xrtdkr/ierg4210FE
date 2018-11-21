import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {SingleCommoResponse} from './modules/singleCommoResponse';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CommodityElementService {

  getCommodityElementUrl = 'http://localhost:8080/api/getCommodity';

  constructor(
    private http: HttpClient,
  ) {
  }

  getCommodityElement(id: string): Observable<SingleCommoResponse> {
    const params = new HttpParams().set('id', id);
    return this.http.get<SingleCommoResponse>(this.getCommodityElementUrl, {params});
  }

}
