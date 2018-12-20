import {Bill} from './bill';
import {CommodityElement} from '../commodity/commodityElement';

export class BillResponse {
  msg: string;
  data: {
    'bill': Bill,
    'prod': CommodityElement[],
    'alipay': string,
  };

  constructor(msg: string, data: { bill: Bill; prod: CommodityElement[]; alipay: string }) {
    this.msg = msg;
    this.data = data;
  }
}
