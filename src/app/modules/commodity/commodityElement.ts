export class CommodityElement {
  id: number;
  name: string;
  category_id: number;
  image: string;
  price: number;
  description: string;

  constructor(id: number, name: string, category_id: number, image: string, price: number, description: string) {
    this.id = id;
    this.name = name;
    this.category_id = category_id;
    this.image = image;
    this.price = price;
    this.description = description;
  }
}
