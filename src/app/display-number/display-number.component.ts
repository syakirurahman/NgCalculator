import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-number',
  templateUrl: './display-number.component.html',
  styleUrls: ['./display-number.component.scss']
})
export class DisplayNumberComponent implements OnInit {
  @Input() displayValue: number;
  constructor() { }

  ngOnInit() {
  }

}
