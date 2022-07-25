import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pipe, filter, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CityScoreService {
  data: any;
  city: any;
  color: any;
  width: any;
  colorLiving: any;
  widthLiving: any;
  filtered: boolean = false;
  text: any;
  updateFilter(response: any, text: any) {
    this.filtered = response;
    this.text = text;
  }

  saveCssProperties(color: any, width: any) {
    this.color = color;
    this.width = width;
  }
  saveCssPropertiesForCostOfLiving(color: any, width: any) {
    this.colorLiving = color;
    this.widthLiving = width;
  }
  saveArray(data: any) {
    this.data = data;
  }
  callCityScoresAPI(city: any) {
    return this.http.get(`${city}scores`);
  }

  //City API
  callCityAPI() {
    return this.http.get('https://api.teleport.org/api/urban_areas/');
  }
  saveCities(data: any) {
    this.city = data;
  }
  constructor(private http: HttpClient) {}
}
