import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
// import {MainCommodityResponse} from './modules/mainCommodityResponse';
import {CommodityResponse} from '../modules/commodity/commodityResponse';
import {CommonSuccess} from '../modules/common/commonSuccess';

@Injectable({
  providedIn: 'root'
})

export class MainCommodityService {

  private mainCommodityUrl = 'http://localhost:8080/api/getProductionById';
  private getCommodityUrl = 'http://localhost:8080/api/production/get/';
  private addCommodityUrl = 'http://localhost:8080/api/production/add/';
  private updateCommodityUrl = 'http://localhost:8080/api/production/update/';
  private deleteCommodityUrl = 'http://localhost:8080/api/production/delete/';
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
    this.fileToUpload = files.item(0);
    const formData = new FormData();
    formData.append('name', name);
    formData.append('category_id', category_id.toString());
    formData.append('file', this.fileToUpload, this.fileToUpload.name);
    formData.append('price', price.toString());
    formData.append('description', description);
    return this.http.post<CommonSuccess>(this.addCommodityUrl, formData, {withCredentials: true});
  }
}

