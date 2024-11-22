import { Component } from '@angular/core';

export interface CountryOption {
  countryName: string;
  countryCode: string;
  language: string;
  flagUrl: string;
}


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  searchinformation: string = '';
  // Handle the search query change
  onSearch(query: string) {
    this.searchinformation = query;
    console.log('Searching for:', this.searchinformation);
    // You can implement the search logic here (e.g., filter a list of items)
  }

  countryOptions: CountryOption[] = [
    {
      countryName: 'United States',
      countryCode: 'US',
      language: 'English',
      flagUrl: 'assests/images/cards/cardImg1.png',
    },
    {
      countryName: 'France',
      countryCode: 'FR',
      language: 'French',
      flagUrl: "https://en.wikipedia.org/wiki/Flag_of_France#/media/File:Flag_of_France.svg",
    },
    {
      countryName: 'Germany',
      countryCode: 'DE',
      language: 'German',
      flagUrl: 'assests/images/cards/cardimg1.png',
    },
    {
      countryName: 'Spain',
      countryCode: 'ES',
      language: 'Spanish',
      flagUrl: 'assests/images/cards/cardimg1.png',
    },
    // Add more countries as needed
  ];
  selectedCountry: CountryOption | null = null; // Default selected country code
  isDropdownDisabled = false;

  //onCountryChange(event: string) {
  //  this.selectedCountry = event;
  //  console.log('Selected country:', event);
}

