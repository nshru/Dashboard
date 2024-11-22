import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { GoogleChartsModule } from 'angular-google-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ButtonComponent } from './compItems/button/button.component';
import { CalenderComponent } from './compItems/calender/calender.component';
import { CheckboxComponent } from './compItems/checkbox/checkbox.component';
import { DropdownComponent } from './compItems/dropdown/dropdown.component';
import { InValueComponent } from './compItems/invalue/invalue.component';
import { LabelComponent } from './compItems/label/label.component';
import { MainComponent } from './dash_board/main/main.component';
import { SideBarComponent } from './dash_board/side-bar/side-bar.component';
import { FooterComponent } from './dash_board/footer/footer.component';
import { CardoneComponent } from './dash_board/cardone/cardone.component';
import { CardtwoComponent } from './dash_board/cardtwo/cardtwo.component';
import { CardthreeComponent } from './dash_board/cardthree/cardthree.component';
import { CardfourComponent } from './dash_board/cardfour/cardfour.component';
import { CardfiveComponent } from './dash_board/cardfive/cardfive.component';
import { CardsixComponent } from './dash_board/cardsix/cardsix.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { MatCardModule } from '@angular/material/card';
import { MatDatepicker, MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    CalenderComponent,
    CheckboxComponent,
    DropdownComponent,
    InValueComponent,
    LabelComponent,
    MainComponent,
    SideBarComponent,
    FooterComponent,
    CardoneComponent,
    CardtwoComponent,
    CardthreeComponent,
    CardfourComponent,
    CardfiveComponent,
    CardsixComponent,

 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighchartsChartModule,
    MatCardModule,
    MatDatepickerModule,
    FormsModule,
    MatIconModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
