export class Bill {
  bill_series: string;
  create_time: string;
  id: number;

  constructor(bill_series: string, create_time: string, id: number) {
    this.bill_series = bill_series;
    this.create_time = create_time;
    this.id = id;
  }
}

