import { Component, Input, input, OnInit } from '@angular/core';
import { IProperty } from '../IProperty';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css'],
  standalone: true,
  imports:[RouterLink]
})
export class PropertyCardComponent implements OnInit {
@Input() property!: IProperty;
  constructor() { }

  ngOnInit() {
  }

}
