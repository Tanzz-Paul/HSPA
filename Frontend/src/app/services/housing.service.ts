import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IProperty } from '../property/IProperty';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

constructor(private http: HttpClient) { }

getAllProperties(): Observable<IProperty[]>{
  return this.http.get<{ [key:string]: any}>('data/properties.json').pipe(
    map(data => {
      const propertiesArray: Array<IProperty> = [];
      for(const id in data) {
        if(data.hasOwnProperty(id)){
          propertiesArray.push(data[id]);
        }
      }
      return propertiesArray;
    })
  );
}

}
