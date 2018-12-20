import {Injectable} from '@angular/core';
import {Configs} from '../config/config';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BillResponse} from '../modules/bills/bill-response';

@Injectable({
  providedIn: 'root'
})
export class BillServiceService {

  HOST = Configs.prodHost;
  checkoutUrl = this.HOST + '/api/checkout/';

  constructor(
    private http: HttpClient,
  ) {
  }

  checkout(): Observable<BillResponse> {
    return this.http.get<BillResponse>(this.checkoutUrl, {withCredentials: true});
  }
}
