import { Component } from '@angular/core';
import { Router } from 'express';

@Component({
  selector: 'app-customer-parcel-details',
  standalone: false,
  
  templateUrl: './customer-parcel-details.component.html',
  styleUrl: './customer-parcel-details.component.css'
})
export class CustomerParcelDetailsComponent{
shareData:any;
constructor(){}


ngOnInit():void{
const navigation = window.history.state;
if(navigation){
  this.shareData = navigation.response;
}
}

}

