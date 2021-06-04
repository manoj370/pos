import { Injectable } from '@angular/core';
import { HttpServiceService } from './httpservice';
import { urlServices } from './serviceUrls';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(public urlservices:urlServices,private http:HttpServiceService) { 

  }
  getItems(){
    // return this.http.get(this.urlservices.getCall);
    // OR
    return this.http.get('/assets/db.json');
  }

}
