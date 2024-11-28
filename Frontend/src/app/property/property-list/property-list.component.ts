import { Component, OnInit } from '@angular/core';
import { PropertyCardComponent } from "../property-card/property-card.component";
import { NgFor } from '@angular/common';
import { HousingService } from '../../services/housing.service';
import { IProperty } from '../IProperty';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
  standalone: true,
  imports: [PropertyCardComponent, NgFor],
})
export class PropertyListComponent implements OnInit {

  properties: Array<IProperty> = [];

  constructor(private housingService:HousingService) { }

  ngOnInit(): void {
    this.housingService.getAllProperties().subscribe({
      next:data=>{
        this.properties=data;
        console.log(data);
      },
      error: error =>{
        console.log(error);
      }

    });
  }

}
