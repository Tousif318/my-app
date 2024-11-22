import { Component } from '@angular/core';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']
})
export class FlipkartComponent {
  products: any = [
    { productname: 'Pen', price: 20, rating: 4, freedelivery: false },
    { productname: 'book', price: 40, rating: 4, freedelivery: false },
    { productname: 'bag', price: 500, rating: 5, freedelivery: false },
    { productname: 'shirt', price: 400, rating: 3, freedelivery: false },
    { productname: 'cap', price: 250, rating: 3, freedelivery: false },
    { productname: 'mobile', price: 10000, rating: 4, freedelivery: true },
    { productname: 'laptop', price: 35000, rating: 4, freedelivery: true },
    { productname: 'mobile case', price: 350, rating: 3, freedelivery: false },
    { productname: 'charger', price: 300, rating: 2, freedelivery: false },
    { productname: 'airpads', price: 4000, rating: 4, freedelivery: true },
    { productname: 'watch', price: 5000, rating: 5, freedelivery: true }
  ];

  delete(i: number) {
    this.products.splice(i, 1);
  }
  plh() {
    this.products.sort((a: any, b: any) => a.price - b.price)
  }
  phl() {
    this.products.sort((a: any, b: any) => b.price - a.price)
  }
  rlh() {
    this.products.sort((a: any, b: any) => a.rating - b.rating)
  }
  rhl() {
    this.products.sort((a: any, b: any) => b.rating - a.rating)
  }
  term: string = "";
  search() {
    this.products = this.products.filter((product: any) => product.productname.includes(this.term));
  }
  discount() {
    this.products = this.products.map((product: any) => {
      product.price = product.price * 0.5;
      return product
    })
  }
  dcharge() {
    this.products = this.products.map((product: any) => {
      product.price = product.price + 50;
      return product
    })
  }

  pname: string = "";
  price: number = 0;
  rating: number = 0;
  freedelivery: boolean = true;

  add() {
    let product = {
      productname: this.pname,
      price: this.price,
      rating: this.rating,
      freedelivery: this.freedelivery
    }

    this.products.unshift(product);
  }

  ofd(){
    this.products = this.products.filter((product:any)=>product.freedelivery == true)
  }
}