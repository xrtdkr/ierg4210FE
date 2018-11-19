import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {CommodityResponse} from './modules/commodityResponse';
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

  getCommodityElement(id: string): Observable<CommodityResponse> {
    const params = new HttpParams().set('id', id);
    return this.http.get<CommodityResponse>(this.getCommodityElementUrl, {params});
  }

}
