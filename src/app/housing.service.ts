import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  url = 'assets/db.json';

  constructor() { }
  async getAllHousingLocation(): Promise<HousingLocation[]>{
    const response = await fetch(this.url);
    const data = await response.json();
    return data.locations ?? [];
  }

  async getHousingLocationById(id:Number): Promise<HousingLocation | undefined>{
    const response = await fetch(this.url);
    const data = await response.json();
    return data.locations.find((location: { id: Number; }) => location.id === id);
  }

  submitApplication(firstName: string, lastName: string, email: string){
    console.log(firstName, lastName, email)
  }
}
