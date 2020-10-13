import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent implements OnInit {
    @Input() products;

    constructor() { }

    ngOnInit(): void {}

    removeProduct(productId: number): void {
    const index = this.products.findIndex(product => product.id === productId);

    if (index !== -1)
        this.products.splice(index, 1);
    }

    quantityUpdate(element) {
        const valueEle: number = element.value;

        if (valueEle < 0)
          return false
    }
}
