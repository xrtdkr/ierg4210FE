import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ShopCartResponse} from '../modules/shopping-cart/shopCartResponse';
import {CommonSuccess} from '../modules/common/commonSuccess';
import {CommodityResponse} from '../modules/commodity/commodityResponse';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  getShoppingCartUrl = 'http://127.0.0.1:8080/api/getShoppingCart/';
  addCartProdUrl = 'http://127.0.0.1:8080/api/addCartProd/';
  deleteCartProdUrl = 'http://127.0.0.1:8080/api/deleteCartProd/';


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
