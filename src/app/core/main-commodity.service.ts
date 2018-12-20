import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
// import {MainCommodityResponse} from './modules/mainCommodityResponse';
import {CommodityResponse} from '../modules/commodity/commodityResponse';
import {CommonSuccess} from '../modules/common/commonSuccess';
import {Configs} from '../config/config';

@Injectable({
  providedIn: 'root'
})

export class MainCommodityService {

  HOST = Configs.testHost;

  private mainCommodityUrl = this.HOST + '/api/getProductionById';
  private getCommodityUrl = this.HOST + '/api/production/get/';
  private addCommodityUrl = this.HOST + '/api/production/add/';
  private updateCommodityUrl = this.HOST + '/api/production/update/';
  private deleteCommodityUrl = this.HOST + '/api/production/delete/';
  private fileToUpload: File;

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

  addCommodity(name: string, category_id: number, files: FileList, price: number, description: string): Observable<CommonSuccess> {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('category_id', category_id.toString());
    formData.append('file', files[0], files[0].name);
    formData.append('price', price.toString());
    formData.append('description', description);
    return this.http.post<CommonSuccess>(this.addCommodityUrl, formData, {withCredentials: true});
  }
}

