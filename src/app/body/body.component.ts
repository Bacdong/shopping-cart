import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent implements OnInit {
    @Input() products;
    @Output() onRemoveProduct = new EventEmitter();

    constructor() { }

    ngOnInit(): void {}

    removeProduct(productId: number): void {
      this.onRemoveProduct.emit(productId);
    }

    quantityUpdate(element) {
        const valueEle: number = element.value;

        if (valueEle < 0)
          return false
    }
}
