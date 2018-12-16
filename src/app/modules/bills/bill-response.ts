import {Bill} from './bill';
import {CommodityElement} from '../commodity/commodityElement';

export class BillResponse {
  msg: string;
  data: {
    'bill': Bill,
    'prod': CommodityElement[],
  };

  constructor(msg: string, data: { bill: Bill; prod: CommodityElement[] }) {
    this.msg = msg;
    this.data = data;
  }
}
