import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  title = "Shopping Cart";
  @Input() quantityItems: number;

  constructor() { }

  ngOnInit(): void {}
}
