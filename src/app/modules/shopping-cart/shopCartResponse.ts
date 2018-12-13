export class ShopCartResponse {
  msg: string;
  data: number[];

  constructor(msg: string, data: number[]) {
    this.msg = msg;
    this.data = data;
  }
}
