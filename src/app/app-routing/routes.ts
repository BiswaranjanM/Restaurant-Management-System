import { Routes } from "@angular/router";
import { RestaurantDetailsComponent } from "../components/restaurant-details/restaurant-details.component"
import { RestaurantListComponent } from "../components/restaurant-list/restaurant-list.component"



  export const routes: Routes=[
    { path: 'details/:name', component: RestaurantDetailsComponent },
    { path: '', component: RestaurantListComponent }
];