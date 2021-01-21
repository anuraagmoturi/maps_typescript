import faker, { fake } from 'faker';

export class Company {

  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  }

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: +faker.address.latitude(),
      lng: +faker.address.longitude()
    }
  }

  markerContent(): string {
    return `
    <div>
      <h2>Company Name: ${this.companyName}</h1>
      <h3>Companyphrase: ${this.catchPhrase}</h1>
    </div>
    
    `
  }
}