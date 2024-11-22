import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HighchartsChartModule } from 'highcharts-angular';

@Component({
  selector: 'app-cardfour',
  templateUrl: './cardfour.component.html',
  styleUrl: './cardfour.component.css'
})
export class CardfourComponent {

  cards = [
    { img: 'assets/images/cards/cardImg1.png', title: 'Colorful Heaven', artist: 'By Mark Benjamin', bid: '1.30' },
    { img: 'assets/images/cards/cardImg2.png', title: 'Abstract Colors', artist: 'By Esthera Jackson', bid: '0.91' },
    { img: 'assets/images/cards/cardImg3.png', title: 'ETH AI Brain', artist: 'By Nick Wilson', bid: '2.80' },
    { img: 'assets/images/cards/cardImg4.png', title: 'Swipe Circles', artist: 'By Peter Will', bid: '2.30' },
    { img: 'assets/images/cards/cardImg5.png', title: 'Mesh Gradients', artist: 'By Will Smith', bid: '0.50' },
    { img: 'assets/images/cards/cardImg6.png', title: '3D Cubes Art', artist: 'By Manny Gates', bid: '6.50' }
  ];
  currentIndex = 0;

  moveSlide(direction: number) {

    this.currentIndex += direction;


    if (this.currentIndex < 0) {
      this.currentIndex = this.cards.length - 1;
    } else if (this.currentIndex >= this.cards.length) {
      this.currentIndex = 0;
    }
  }
  Highcharts: typeof Highcharts = Highcharts;
  pieChartOptions: Highcharts.Options = {
    chart: {
      type: 'pie',
      backgroundColor: 'transparent',
    },
    title: {
      text: " "
    },
    series: [{
      type: 'pie',
      data: [
        { name: "Product A", y: 45 },
        { name: 'Product B', y: 30 },
        { name: 'Product C', y: 25 }
      ],

    }],
    tooltip: {
      pointFormat: "{point.name}:<b>{point.percentage:.1f}%</b>"
    }
  };

}
