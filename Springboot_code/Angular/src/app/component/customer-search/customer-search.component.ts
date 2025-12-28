// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-customer-search',
//   standalone: false,
  
//   templateUrl: './customer-search.component.html',
//   styleUrl: './customer-search.component.css'
// })
// export class CustomerSearchComponent {

// }



import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
    selector: 'app-customer-search',
    standalone: false,
    
    templateUrl: './customer-search.component.html',
    styleUrl: './customer-search.component.css'
  })

export class CustomerSearchComponent {
  private shareData :any;
  bookingId: string = ''; // Variable to capture input value
  apiUrl: string = "http://localhost:8080/bookings/search"; // Replace with your Spring Boot API URL

  constructor(private http: HttpClient, private router: Router) {}

  onTrackPackage() {
    if (this.bookingId == "") {
      alert('Please  enter a Booking ID!');
      return;
    }
    // Call the backend API to validate the Booking ID
    this.http.get(`${this.apiUrl}/${this.bookingId}`).subscribe(
      (response: any) => {
        if (response) {
         this.shareData = response;
          this.router.navigate(['/customerParcelDetails'], { state: {response:this.shareData} });
        } else {
          alert('Booking ID id not found. Please check and try again!');
        }
      },
      (error) => {
        console.error('Error occurred while validating Booking ID:', error);
        alert('An error occurred. Please try again later!');
      }
    );
  }
}