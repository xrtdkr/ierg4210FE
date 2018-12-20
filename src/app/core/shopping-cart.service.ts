import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ShopCartResponse} from '../modules/shopping-cart/shopCartResponse';
import {CommonSuccess} from '../modules/common/commonSuccess';
import {CommodityResponse} from '../modules/commodity/commodityResponse';
import {Configs} from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  HOST = Configs.prodHost;

  getShoppingCartUrl = this.HOST + '/api/getShoppingCart/';
  addCartProdUrl = this.HOST + '/api/addCartProd/';
  deleteCartProdUrl = this.HOST + '/api/deleteCartProd/';


  constructor(
    private http: HttpClient,
  ) {
  }

  getShoppingCart(): Observable<CommodityResponse> {
    return this.http.get<CommodityResponse>(this.getShoppingCartUrl, {withCredentials: true});
  }

  addCartProd(pid: number): Observable<CommonSuccess> {
    const formData = new FormData();
    formData.append('pid', pid.toString());
    return this.http.post<CommonSuccess>(this.addCartProdUrl, formData, {withCredentials: true});
  }

  deleteCartProd(pid: number): Observable<CommonSuccess> {
    const formData = new FormData();
    formData.append('pid', pid.toString());
    return this.http.post<CommonSuccess>(this.deleteCartProdUrl, formData, {withCredentials: true});
  }
}
