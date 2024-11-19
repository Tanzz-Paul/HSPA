import { Component, Input, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css'],
  standalone: true,
})
export class PropertyCardComponent implements OnInit {
@Input() property: any
  constructor() { }

  ngOnInit() {
  }

}
