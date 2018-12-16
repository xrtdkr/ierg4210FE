import {Injectable} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {AuthLoginModel} from '../modules/auth/authLoginModel';
import {AuthRegisterModel} from '../modules/auth/authRegisterModel';
import {Observable} from 'rxjs';
import {CommonSuccess} from '../modules/common/commonSuccess';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private registerUrl = 'http://127.0.0.1:8080/api/register/';
  private loginUrl = 'http://127.0.0.1:8080/api/login/';
  private updateUrl = 'http://127.0.0.1:8080/api/update/';

  constructor(
    private cookieService: CookieService,
    private http: HttpClient,
  ) {
  }

  register(mRegister: AuthRegisterModel): Observable<CommonSuccess> {
    const formData = new FormData();
    formData.append('email', mRegister.email);
    formData.append('username', mRegister.email);
    formData.append('password', mRegister.password);
    return this.http.post<CommonSuccess>(this.registerUrl, mRegister, {withCredentials: true});
  }

  login(mLogin: AuthLoginModel): Observable<CommonSuccess> {
    const formData = new FormData();
    formData.append('email', mLogin.email);
    formData.append('password', mLogin.password);
    return this.http.post<CommonSuccess>(this.loginUrl, mLogin, {withCredentials: true});
  }

  update(oldPassword: string, newPassword: string): Observable<CommonSuccess> {
    const formData = new FormData();
    formData.append('old_password', oldPassword);
    formData.append('new_password', newPassword);
    return this.http.post<CommonSuccess>(this.updateUrl, formData, {withCredentials: true});
  }
}
