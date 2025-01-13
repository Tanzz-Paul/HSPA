import { Component, OnInit } from '@angular/core';
import { PropertyCardComponent } from "../property-card/property-card.component";
import { NgFor } from '@angular/common';
import { HousingService } from '../../services/housing.service';
import { IProperty } from '../IProperty';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
  standalone: true,
  imports: [PropertyCardComponent, NgFor],
})
export class PropertyListComponent implements OnInit {

  properties: Array<IProperty> = [];
  sellRent = 1;

  constructor(private route: ActivatedRoute, private housingService:HousingService) { }

  ngOnInit(): void {
    if (this.route.snapshot.url.toString()){
      this.sellRent = 2; // Means we are on rent property URL else we are on base url 
    }
    this.housingService.getAllProperties(this.sellRent).subscribe({
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
