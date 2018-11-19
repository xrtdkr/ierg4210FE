import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
// import {MainCommodityResponse} from './modules/mainCommodityResponse';
import {CommodityResponse} from './modules/commodityResponse';

@Injectable({
  providedIn: 'root'
})

export class MainCommodityService {

  private mainCommodityUrl = 'http://localhost:8080/api/getProductionById';

  constructor(
    private http: HttpClient,
  ) {
  }

  getMainCommodityService(id: string): Observable<CommodityResponse> {
    const params = new HttpParams().set('id', id);
    return this.http.get<CommodityResponse>(this.mainCommodityUrl, {params});
  }

}

