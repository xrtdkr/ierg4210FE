import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {ShoppingCartService} from '../core/shopping-cart.service';
import {CommodityElementService} from '../core/commodity-element.service';
import {ShopCartResponse} from '../modules/shopping-cart/shopCartResponse';
import {CommodityResponse} from '../modules/commodity/commodityResponse';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cookieValue = '';
  isLogin = false;
  shopCartCommodity: CommodityResponse;

  constructor(
    private cookieService: CookieService,
    private http: HttpClient,
    private shoppingCartService: ShoppingCartService,
    private commodityService: CommodityElementService,
  ) {
  }

  ngOnInit() {
    const cookieExist: boolean = this.cookieService.check('user');
    if (cookieExist) {
      this.isLogin = true;
      this.getCartGoods();
      console.log('have user');
    } else {
      this.isLogin = false;
      console.log('do not have user');
    }
  }

  getCartGoods(): void {
    this.shoppingCartService.getShoppingCart().subscribe(
      shapCR => this.shopCartCommodity = shapCR
    );
  }

}
