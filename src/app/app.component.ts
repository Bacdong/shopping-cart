import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  products: Product[] = [
    {
        id: 1,
        name: "iPhone 12",
        brief: "Smartphone by Apple",
        thumbnail: "http://teamfullstack.000webhostapp.com/img/product/10033.png",
        price: 689.46,
        quantity: 3
    },
    {
        id: 2,
        name: "iPhone XR 64GB",
        brief: "Smartphone by Apple",
        thumbnail: "http://teamfullstack.000webhostapp.com/img/product/10031.png",
        price: 578.04,
        quantity: 1
    },
    {
        id: 3,
        name: "iPad Mini 32GB",
        brief: "Tablet by Apple",
        thumbnail: "http://teamfullstack.000webhostapp.com/img/product/10019.png",
        price: 305.75,
        quantity: 2
    },
  ];

  quantityItems = 0;
  subTotal = 0;
  discountPercent: number = 0;
  discount: number = 0;
  taxPercent: number = 10;
  tax: number = 0;

  removeProduct(productId: number) {
    // Delete product
    const index = this.products.findIndex(product => product.id === productId);

    if (index !== -1)
        this.products.splice(index, 1);

    // Update subtotal
    let quantityItems = 0;
    let subTotal = 0;

    for (const product of this.products) {
      quantityItems += product.quantity;
      subTotal += product.price * product.quantity;
    }

    this.quantityItems = quantityItems;
    this.subTotal = subTotal;
  }

  ngDoCheck() {
    this.quantityItems = 0;
    this.subTotal = 0;

    for (const product of this.products) {
      this.quantityItems += product.quantity;
      this.subTotal += product.price * product.quantity;
    }

    this.discount = (this.subTotal * this.discountPercent) / 100;
    this.tax = ((this.subTotal - this.discount) * this.taxPercent) / 100;
  }

  handleUpdateQuantity(p: { id: number; quantity: number }) {
    const product = this.products.find(product => product.id === p.id);
    if (product) {
      product.quantity = p.quantity || 0;
    }
  }
}
