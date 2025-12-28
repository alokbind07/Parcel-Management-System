

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-search',
  standalone: false,
  
  templateUrl: './admin-search.component.html',
  styleUrl: './admin-search.component.css'
})
export class AdminSearchComponent {
  private shareData :any;
  bookingId: string = ''; // Variable to capture input value
  apiUrl: string = "http://localhost:8080/bookings/search"; // Replace with your Spring Boot API URL

  constructor(private http: HttpClient, private router: Router) {}

  onTrackPackage() {
    if (!this.bookingId) {
      alert('Please enter a valid Booking ID!');
      return;
    }
    // Call the backend API to validate the Booking ID
    this.http.get(`${this.apiUrl}/${this.bookingId}`).subscribe(
      (response: any) => {
        if (response) {
         this.shareData = response;
          this.router.navigate(['/adminParcelDetails'], { state: {response:this.shareData} });
        } else {
          alert('Invalid Booking ID. Please check and try again!');
        }
      },
      (error) => {
        console.error('Error occurred while validating Booking ID:', error);
        alert('An error occurred. Please try again later!');
      }
    );
  }
}
