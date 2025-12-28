
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-history',
  standalone: false,
  
  templateUrl: './search-history.component.html',
  styleUrl: './search-history.component.css'
})


export class SearchHistoryComponent {
  private Data: any;
  userId: string = ''; // Variable to capture User ID input
  apiUrl: string = "http://localhost:8080/user/bookings"; // Replace with your Spring Boot API URL for User ID

  constructor(private http: HttpClient, private router: Router) {}

  onTrackByUserId() {
    if (!this.userId) {
      alert('Please enter a valid User ID!');
      console.log(this.userId);
      return;
    }
    //console.log(this.userId);
    // Call the backend API to validate the User ID
    this.http.get(`${this.apiUrl}/${this.userId}`).subscribe(

      (response: any) => {
        if (response ) {
          this.Data = response;
          this.router.navigate(['/searchHistoryDetails'], { state: { response: this.Data } });
          console.log(this.Data);
        } else{
          alert('Invalid User ID. Please check and try again!');
        }
      },
      (error) => {
        console.error('Error occurred while validating User ID:', error);
        alert('An error occurred. Please try again later!');
      }
    );
  }
}