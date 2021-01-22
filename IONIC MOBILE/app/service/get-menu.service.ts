import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GetMenuService {
url='http://localhost:3000/api/menus';
  constructor(private http:HttpClient) { }

  get_menu(){
  
      return this.http.get(this.url).pipe(data=>
       data );

  }
  
}
