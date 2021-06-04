import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ServiceService } from './service.service';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'codinovatest';
  items: any;
  images: any;
  description: any;
  price: any;
  i: number = 0;
  selectedproducts: any = [];
  delproduct: any;
  y: number = 1;
  total: any=0;
  z: number=1;
  currentdate: Date;
  // datetime: string;
  constructor(private service: ServiceService) {
    this.currentdate = new Date(); 
    // this.datetime = "Last Sync: " + this.currentdate.getDate() + "/"
    //                 + (this.currentdate.getMonth()+1)  + "/" 
    //                 + this.currentdate.getFullYear() + " @ "  
    //                 + this.currentdate.getHours() + ":"  
    //                 + this.currentdate.getMinutes() + ":" 
    //                 + this.currentdate.getSeconds();
  }
  ngOnInit() {
    console.log(this.i)
    console.log(this.y);
    this.service.getItems().subscribe((res: any) => {
      console.log(res);
      this.items = res;
      this.images = res.posts;
      console.log(this.images.length)
    
    }, error => {
      console.log(error);
    })

    
  }
  passData(event: any) {
    console.log(event);
    console.log(event.target.value);
    this.images.forEach((element: any) => {
      if (element.image === event.target.value) {
        console.log('add items');
        this.description = element.description;
        this.price = element.price;
        this.i++;
        console.log(this.i);
        this.selectedproducts.push({ description: element.description, price: element.price });
        console.log(this.selectedproducts);
         this.total =element.price;
        
      }
    });
  }
  deleteProduct(event: any) {
    this.delproduct = event.target.value;
    this.selectedproducts.forEach((item: any, index: any) => {
      debugger
      if (item.price === this.delproduct) {
        this.selectedproducts.splice(index, 1);
        console.log(this.selectedproducts);
      }
    });
    console.log(this.selectedproducts.length);
  }
  addItem(event: any) {
    console.log(event.target.value);
    debugger
    this.selectedproducts.forEach((element: any) => {
      if (element.price === event.target.value) {
        console.log('add items');
        this.y++;
        console.log(this.y);
      this.total =this.y*element.price
      console.log(this.total);
      this.z= this.y
      }
      // else{
      //   this.y--;
      //   console.log(this.y);
      //   this.total =this.y*element.price;
      // }
    });
  }


  deleteItem(event: any) {
    console.log(event.target.value);
    this.selectedproducts.forEach((element: any) => {
      debugger
      if (element.price === event.target.value) {
        console.log('add items');
        this.y--;
        console.log(this.y);
        // this.total =this.y*element.price;
      }
    });
  }
}

