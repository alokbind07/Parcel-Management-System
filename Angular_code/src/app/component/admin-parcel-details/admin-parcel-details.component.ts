import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-parcel-details',
  standalone: false,
  
  templateUrl: './admin-parcel-details.component.html',
  styleUrl: './admin-parcel-details.component.css'
})
export class AdminParcelDetailsComponent {
  shareData:any;
  constructor(){}
  // constructor(private router: Router ){}
  
  // navigatePath() : void{
  //   this.router.navigate(['/admin']);
  // }
  
  
  ngOnInit():void{
  const navigation = window.history.state;
  if(navigation){
    this.shareData = navigation.response;
  }
  }
}
