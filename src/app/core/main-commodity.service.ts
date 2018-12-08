import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
// import {MainCommodityResponse} from './modules/mainCommodityResponse';
import {CommodityResponse} from '../modules/commodity/commodityResponse';

@Injectable({
  providedIn: 'root'
})

export class MainCommodityService {

  private mainCommodityUrl = 'http://localhost:8080/api/getProductionById';
  private getCommodityUrl = 'http://localhost:8080/api/production/get/';
  private addCommodityUrl = 'http://localhost:8080/api/production/add/';
  private updateCommodityUrl = 'http://localhost:8080/api/production/update/';
  private deleteCommodityUrl = 'http://localhost:8080/api/production/delete/';

  constructor(
    private http: HttpClient,
  ) {
  }

  getMainCommodityService(id: string): Observable<CommodityResponse> {
    const params = new HttpParams().set('id', id);
    return this.http.get<CommodityResponse>(this.mainCommodityUrl, {params});
  }

  getAllCommodity(): Observable<CommodityResponse> {
    return this.http.get<CommodityResponse>(this.getCommodityUrl);
  }


}

