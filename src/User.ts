import faker from 'faker';
import { Mappable } from './Map';

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  }

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: +faker.address.latitude(),
      lng: +faker.address.longitude()
    }
  }

  markerContent(): string {
    return `
      <div>
        <h2>User: ${this.name}</h2>
      </div>
    `
  }
}