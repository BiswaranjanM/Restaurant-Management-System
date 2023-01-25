import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/interfaces/item';
import { RestaurantDetails } from 'src/app/interfaces/restaurant-details';
import { ResturantService } from 'src/app/services/resturant.service';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.scss']
})
export class RestaurantDetailsComponent implements OnInit {
  selectedCategory: string[] = ['All'];
  categoryList: string[] = ['All'];
  categoryQty: number[] = [];
  unfilteredMenu: Item[] = [];
  menuItems: Item[] = [];
  restaurantDetail: RestaurantDetails | undefined;
  restaurantName:string | null="";
  constructor(    private service: ResturantService,
    private route: ActivatedRoute ) {
      this.restaurantName = this.route.snapshot.paramMap.get('name');
     }

  ngOnInit(): void {
    this.getRestaurantDetails();
  }
  getRestaurantDetails = () => {
    this.service.getRestaurantDetails().subscribe( (response: RestaurantDetails[]) => {
      this.restaurantDetail = response.filter(item => item.restaurantName.toLowerCase() === this.restaurantName?.toLowerCase())[0];
      this.getMenu();
      //this.setCategory();
      this.restaurantDetail.openingHours = this.restaurantDetail.openingHours.replace(', ', ', <br>');
    });
  }

  getMenu = () => {
    //this.menuItems = this.service.getMenu().filter((item: any) => item.restaurantName === this.restaurantName)[0].items;
    this.service.getMenu().subscribe(items=>
      { 
        this.menuItems= items.menu.filter((x:any)=>JSON.parse(x.restaurantName).includes(this.restaurantName))
        this.setCategory();
        this.unfilteredMenu = this.menuItems;
      })
  }

  setCategory = () => {
    this.categoryQty.push(this.menuItems.length);
    this.menuItems.forEach(item => {
      let category =JSON.parse(item.itemCategory)[0]
      if(!this.categoryList.includes(category)){
        this.categoryList.push(category);
        this.categoryQty.push(1);
      }
      else{
        this.categoryQty[this.categoryList.indexOf(category)] = this.categoryQty[this.categoryList.indexOf(category)] + 1;
      }
    });
  }

  toggle = (item:any) => {
    if(this.selectedCategory.length == 1 && this.selectedCategory[0] === 'All'){
     this.selectedCategory = [];   
    }
    if(!this.selectedCategory.includes(item)){
      this.selectedCategory.push(item);
    }
    else{
      this.selectedCategory.splice(this.selectedCategory.indexOf(item), 1);
    }
    if (this.selectedCategory.length == 0 || this.selectedCategory.includes('All'))
    {
      this.selectedCategory = ["All"];
      this.menuItems = this.unfilteredMenu;
    } else {
      this.applyCategoryFilter();
    }
  }

  applyCategoryFilter = () => {
    this.menuItems = this.unfilteredMenu
                    .filter(item => this.selectedCategory.indexOf(JSON.parse(item.itemCategory)[0]) >= 0 );
  }
}
