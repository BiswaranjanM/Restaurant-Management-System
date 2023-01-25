import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { LeftPanelComponent } from './components/left-panel/left-panel.component';
import { RestaurantListComponent } from './components/restaurant-list/restaurant-list.component';
import { FilterPanelComponent } from './components/filter-panel/filter-panel.component';
import { RestaurantDetailsComponent } from './components/restaurant-details/restaurant-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { ResturantService } from './services/resturant.service';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
@NgModule({
  declarations: [
    AppComponent,
    LeftPanelComponent,
    RestaurantListComponent,
    FilterPanelComponent,
    RestaurantDetailsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSidenavModule,
    MatGridListModule,
    MatCardModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatDialogModule,
    MatTooltipModule
  ],
  providers: [ResturantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
