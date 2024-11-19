import { Component, OnInit } from '@angular/core';
import { PropertyCardComponent } from "../property-card/property-card.component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
  standalone: true,
  imports: [PropertyCardComponent, NgFor],
})
export class PropertyListComponent implements OnInit {

  properties: Array<any> = [
    {
      "Id":1,
      "Type": "House",
      "Name": "Chembakottu House",
      "Price": 12000
    },
    {
      "Id":2,
      "Type": "House",
      "Name": "Ithu's House",
      "Price": 13000
    },
    {
      "Id":3,
      "Type": "Villa",
      "Name": "Savi's Villa",
      "Price": 15000
    },
    {
      "Id":4,
      "Type": "House",
      "Name": "Noah House",
      "Price": 15000
    },
    {
      "Id":5,
      "Type": "Apartment",
      "Name": "Zaya's Home",
      "Price": 12000
    },
    {
      "Id":6,
      "Type": "House",
      "Name": "Jane House",
      "Price": 17000
    },
    {
      "Id":7,
      "Type": "House",
      "Name": "Anila Home",
      "Price": 13000
    },
    {
      "Id":8,
      "Type": "House",
      "Name": "Sholy House",
      "Price": 19000
    },
    {
      "Id":9,
      "Type": "Villa",
      "Name": "Shinta House",
      "Price": 17000
    },
    {
      "Id":10,
      "Type": "Villa",
      "Name": "Chinnu Villa",
      "Price": 17000
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
