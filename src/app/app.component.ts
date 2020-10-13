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

  quantityItems = 9;
  // subTotal = 1203.68;
}
