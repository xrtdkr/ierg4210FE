import {Component, OnInit} from '@angular/core';
import {AuthLoginModel} from '../modules/auth/authLoginModel';
import {AuthService} from '../core/auth.service';
import {HttpClient} from '@angular/common/http';
import {AuthRegisterModel} from '../modules/auth/authRegisterModel';
import {CookieService} from 'ngx-cookie-service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  loginEmail = '';
  loginPassword = '';

  registerEmail = '';
  registerUsername = '';
  registerPassword = '';
  cookie: string;

  registerFlag: boolean;

  constructor(
    private authService: AuthService,
    private http: HttpClient,
    private cookieService: CookieService,
    private router: Router,
    private activeRouter: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.controlRegister();
  }

  controlRegister(): void {
    const registerF = this.activeRouter.snapshot.paramMap.get('id');
    this.registerFlag = registerF === 'register';
  }

  login(): void {
    const mLogin = new AuthLoginModel(this.loginEmail, this.loginPassword);
    this.authService.login(mLogin).subscribe(
      () => this.router.navigateByUrl('index/1')
    );
  }

  register(): void {
    const mRegister = new AuthRegisterModel(this.registerUsername, this.registerPassword, this.registerEmail);
    this.authService.register(mRegister).subscribe(
      () => this.router.navigateByUrl('auth')
    );
  }

}
