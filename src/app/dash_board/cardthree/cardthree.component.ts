import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HighchartsChartModule } from 'highcharts-angular';

@Component({
  selector: 'app-cardthree',
  templateUrl: './cardthree.component.html',
  styleUrl: './cardthree.component.css'
})
export class CardthreeComponent {

  isChecked = false;
  isRequired = true;


  checkboxes = [

    { label: 'Landing Page Design', checked: false, disabled: false },
    { label: 'Dashboard Builder', checked: false, disabled: false },
    { label: 'Mobile App Design', checked: false, disabled: false },
    { label: 'Illustrations', checked: false, disabled: false },
    { label: 'Promotional LP', checked: false, disabled: false }
  ];


  onCheckboxChange(checked: boolean) {
    this.isChecked = checked;


    this.checkboxes.forEach(checkbox => {
      checkbox.checked = checked;
      checkbox.disabled = !checked;
    });

    console.log('Main checkbox changed:', checked);
  }
  Highcharts: typeof Highcharts = Highcharts;
  verticalBarChartOptions: Highcharts.Options = {
    chart: {
      type: 'column',
      backgroundColor: 'transparent',
    },
    title: {
      text: ''
    },
    xAxis: {
      categories: [1, 2, 3, 4, 5].map(String) // Use numbers instead of strings for categories
    },
    yAxis: {

      visible: false,

    },
    series: [{
      type: "column",
      name: 'Sales',
      data: [150, 200, 180, 180, 200],
      color: "lightblue",
    }]
  };
}
