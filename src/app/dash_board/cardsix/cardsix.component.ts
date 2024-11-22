import { Component } from '@angular/core';

@Component({
  selector: 'app-cardsix',
  templateUrl: './cardsix.component.html',
  styleUrl: './cardsix.component.css'
})
export class CardsixComponent {

  Profiles = [
    { img: "assets/images/avatars/avatar1.png", Name: "Jason Stathan", title: "web Developer" },
    { img: "assets/images/avatars/avatar2.png", Name: "Christian Mad", title: "Product Designer" },
    { img: "assets/images/avatars/avatar3.png", Name: "Tom Holland", title: "Content Creator" }
  ];

  complexTable = [
    { ID: 1001, Name: "HoriZon UI Pro", Status: "Approved", Date: '18 Apr 2024', progress: 70, Quantity: 220, Balance: 1200 },
    { ID: 1002, Name: "HoriZon UI Pro", Status: "Approved", Date: '18 Apr 2024', progress: 70, Quantity: 220, Balance: 1200 },
    { ID: 1003, Name: "HoriZon UI Pro", Status: "Approved", Date: '18 Apr 2024', progress: 70, Quantity: 220, Balance: 1200 },
    { ID: 1004, Name: "HoriZon UI Pro", Status: "Approved", Date: '18 Apr 2024', progress: 70, Quantity: 220, Balance: 1200 },
    { ID: 1005, Name: "HoriZon UI Pro", Status: "Approved", Date: '18 Apr 2024', progress: 70, Quantity: 220, Balance: 1200 },
    { ID: 1006, Name: "HoriZon UI Pro", Status: "Approved", Date: '18 Apr 2024', progress: 70, Quantity: 220, Balance: 1200 },
    { ID: 1007, Name: "HoriZon UI Pro", Status: "Approved", Date: '18 Apr 2024', progress: 70, Quantity: 220, Balance: 1200 },
    { ID: 1008, Name: "HoriZon UI Pro", Status: "Approved", Date: '18 Apr 2024', progress: 70, Quantity: 220, Balance: 1200 },
    { ID: 1009, Name: "HoriZon UI Pro", Status: "Approved", Date: '18 Apr 2024', progress: 70, Quantity: 220, Balance: 1200 },
    { ID: 1010, Name: "HoriZon UI Pro", Status: "Approved", Date: '18 Apr 2024', progress: 70, Quantity: 220, Balance: 1200 },
    { ID: 1011, Name: "HoriZon UI Pro", Status: "Approved", Date: '18 Apr 2024', progress: 70, Quantity: 220, Balance: 1200 },
    { ID: 1012, Name: "HoriZon UI Pro", Status: "Approved", Date: '18 Apr 2024', progress: 70, Quantity: 220, Balance: 1200 },
    { ID: 1013, Name: "HoriZon UI Pro", Status: "Approved", Date: '18 Apr 2024', progress: 70, Quantity: 220, Balance: 1200 },
    { ID: 1011, Name: "HoriZon UI Pro", Status: "Approved", Date: '18 Apr 2024', progress: 70, Quantity: 220, Balance: 1200 },
    { ID: 1012, Name: "HoriZon UI Pro", Status: "Approved", Date: '18 Apr 2024', progress: 70, Quantity: 220, Balance: 1200 },
    { ID: 1013, Name: "HoriZon UI Pro", Status: "Approved", Date: '18 Apr 2024', progress: 70, Quantity: 220, Balance: 1200 }
  ];

  recordsPerslide = 4;

  searchinformation: string = '';
  currentPage = 1;

  get filterRecords() {
    if (!this.searchinformation) {
      return this.complexTable;

    }
    const query = this.searchinformation.toLowerCase();
    return this.complexTable.filter(record => {
      return Object.values(record).some(value =>
        value.toString().toLowerCase().includes(query));
    });
  }
  get totalSlides() { return Math.ceil(this.complexTable.length / this.recordsPerslide); }

  getCurrentRecords() {
    const startIndex = (this.currentPage - 1) * this.recordsPerslide;
    const endIndex = startIndex + this.recordsPerslide;
    return this.filterRecords.slice(startIndex, endIndex);
  }

  nextSlide() {
    if (this.currentPage < this.totalSlides) {
      this.currentPage++;
    }
  }
  prevSlide() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  goToSlide(page: number) {
    if (page >= 1 && page <= this.totalSlides) {
      this.currentPage = page;
    }
  }


  onSearch(query: string) {
    this.searchinformation = query;
    console.log('Searching for:', this.searchinformation);
    this.currentPage = 1;
  }

}
