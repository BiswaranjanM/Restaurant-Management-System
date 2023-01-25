import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, pipe, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResturantService {
  
  private url: string = 'https://api.sheety.co/bdcbafbc1f4197dda178b9e69f6ccee9/techAlchemyWebTest1';
  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type":  "application/json",
      "Authorization": "34303304-5475-4d63-9352-0d24ed631b37"
    })
  }
  constructor(private http: HttpClient) { }

  getAllRestaurants = () => {
    const url = this.url + '/allRestaurants';

    return this.http.get(url,this.httpOptions).pipe(
      catchError(err=>this.catchErrorAlert(err)),
      map(( value:any ) => {
        return value['allRestaurants'];
      })
      
    );
  }

  getRestaurantDetails = () => {
    const url = this.url + '/restaurantDetails';
    return this.http.get(url,this.httpOptions).pipe(
      catchError(err=>this.catchErrorAlert(err)),
      map(( value:any ) => {
        return value['restaurantDetails'];
      })
    );
  }

  getMenu = () => {
    const url = this.url + '/menu';
    return this.http.get(url,this.httpOptions).pipe(
      catchError(err=>this.catchErrorAlert(err)),
      map(( value:any ) => {
        return value;
      })
    );
  }
  catchErrorAlert(error:any):Observable<Response>{
    return throwError(error);
  }
}
