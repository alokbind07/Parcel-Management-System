
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search-history-details',
  standalone: false,
  
  templateUrl: './search-history-details.component.html',
  styleUrl: './search-history-details.component.css'
})

export class SearchHistoryDetailsComponent {
 
  Data:any;
  constructor(){}
  
  
  ngOnInit():void{
  const navigation = window.history.state;
  if(navigation){
    this.Data = navigation.response;
  }
  }

}
