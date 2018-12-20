import {Component, OnInit} from '@angular/core';
import {PayPalConfig, PayPalEnvironment, PayPalIntegrationType} from 'ngx-paypal';
import {of} from 'rxjs';
import {BillResponse} from '../modules/bills/bill-response';
import {BillServiceService} from '../core/bill-service.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  public payPalConfig?: PayPalConfig;
  public check = false;
  public billRes: BillResponse;
  public total: number;

  // private loadExternalScript(scriptUrl: string) {
  //   return new Promise((resolve, reject) => {
  //     const scriptElement = document.createElement('script');
  //     scriptElement.src = scriptUrl;
  //     scriptElement.onload = resolve;
  //     document.body.appendChild(scriptElement);
  //   });
  // }

  constructor(
    private billService: BillServiceService,
  ) {
  }

  ngOnInit() {
    this.initConfig();
  }

  public yieldBill(): void {
    this.check = true;
    this.billService.checkout().subscribe(
      res => {
        this.billRes = res;
      }
    );
  }

  private initConfig(): void {
    this.payPalConfig = new PayPalConfig(
      PayPalIntegrationType.ClientSideREST,
      PayPalEnvironment.Sandbox,
      {
        commit: true,
        client: {
          sandbox:
            'AR-5Ovd7Kdmfxh1ElGUnwa6pF678J0w-H_9LDwx5Hn8HBawyJMX5bVlvyhdRMR4OE-zQlGUrATgcJMD2'
        },
        button: {
          label: 'paypal',
          layout: 'vertical'
        },
        onAuthorize: (data, actions) => {
          console.log('Authorize');
          return of(undefined);
        },
        onPaymentComplete: (data, actions) => {
          console.log('OnPaymentComplete');
        },
        onCancel: (data, actions) => {
          console.log('OnCancel');
        },
        onError: err => {
          console.log('OnError');
        },
        onClick: () => {
          console.log('onClick');
        },
        validate: (actions) => {
          console.log(actions);
        },
        experience: {
          noShipping: true,
          brandName: 'Angular PayPal'
        },
        transactions: [
          {
            amount: {
              total: 30.11,
              currency: 'USD',
              details: {
                subtotal: 30.00,
                tax: 0.07,
                shipping: 0.03,
                handling_fee: 1.00,
                shipping_discount: -1.00,
                insurance: 0.01
              }
            },
            custom: 'Custom value',
            item_list: {
              items: [
                {
                  name: 'hat',
                  description: 'Brown hat.',
                  quantity: 5,
                  price: 3,
                  tax: 0.01,
                  sku: '1',
                  currency: 'USD'
                },
                {
                  name: 'handbag',
                  description: 'Black handbag.',
                  quantity: 1,
                  price: 15,
                  tax: 0.02,
                  sku: 'product34',
                  currency: 'USD'
                }],
              shipping_address: {
                recipient_name: 'Brian Robinson',
                line1: '4th Floor',
                line2: 'Unit #34',
                city: 'San Jose',
                country_code: 'US',
                postal_code: '95131',
                phone: '011862212345678',
                state: 'CA'
              },
            },
          }
        ],
        note_to_payer: 'Contact us if you have troubles processing payment'
      }
    );
  }
}
