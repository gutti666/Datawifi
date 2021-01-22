import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetContenmenuService {
  
  
  url='http://localhost:3000/api/menus/';
  constructor(private http:HttpClient) { }

  get_contmenu(id:number){
  
      return this.http.get(this.url+id).pipe(data=>
       data );

  }
  
}






