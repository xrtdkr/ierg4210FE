import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {SingleCommoResponse} from '../modules/commodity/singleCommoResponse';
import {Observable} from 'rxjs';
import {CommodityElement} from '../modules/commodity/commodityElement';
import {CommonSuccess} from '../modules/common/commonSuccess';


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

  // addCommodityElement(commodityElement: CommodityElement): Observable<CommonSuccess> {
  // }
}
