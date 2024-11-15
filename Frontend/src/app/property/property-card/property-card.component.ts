import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css'],
  standalone: true,
})
export class PropertyCardComponent implements OnInit {
  
  Property:any = {
    "Id":1,
    "Type": "House",
    "Name": "Chembakottu House",
    "Price": 12000
  }

  constructor() { }

  ngOnInit() {
  }

}