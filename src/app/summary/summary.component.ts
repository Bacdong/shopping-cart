import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html'
})
export class SummaryComponent implements OnInit {
  @Input() subTotal: number;

  constructor() { }

  ngOnInit(): void {
  }

}
