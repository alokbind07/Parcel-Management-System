// import { Component, Input, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import jsPDF from 'jspdf';

// import autoTable from 'jspdf-autotable';

// @Component({
//   selector: 'app-invoice',
//   standalone:false,
//   templateUrl: './invoice.component.html',
//   styleUrls: ['./invoice.component.css'],
// })
// export class InvoiceComponent implements OnInit {
//   @Input()
//   bookingId!: number; // Booking ID to fetch the invoice data
//   parcel: any; // Object to hold fetched parcel details
//   apiUrl: string = 'https://your-backend-api.com/api/parcels/'; // Replace with your actual backend API URL

//   constructor(private http: HttpClient) {}

//   ngOnInit(): void {
//     this.fetchParcelDetails();
//   }

//   // Method to fetch parcel details from backend using Booking ID
//   fetchParcelDetails(): void {
//     if (!this.bookingId) {
//       // alert('Booking ID is missing!');
//       return;
//     }

//     const url = `${this.apiUrl}${this.bookingId}`;
//     this.http.get(url).subscribe(
//       (response: any) => {
//         this.parcel = response; // Assuming backend sends the parcel details
//         console.log('Fetched parcel details:', this.parcel);
//       },
//       (error) => {
//         console.error('Error fetching parcel details:', error);
//         alert('Failed to fetch parcel details. Please try again later.');
//       }
//     );
//   }

 
//   downloadPDF(): void {
//     // Get the HTML content to print (assuming the entire section is wrapped in 'print-section' div)
//     const element = document.getElementById('print-section');

//     if (!element) {
//       alert('No content found to generate the PDF.');
//       return;
//     }

//     // Create a jsPDF instance
//     const doc = new jsPDF('p', 'mm', 'a4');

//     // Use the jsPDF HTML renderer to render the element
//     doc.html(element, {
//       callback: (doc) => {
//         // Save the generated PDF
//         doc.save('Invoice.pdf');
//       },
//       x: 10, // Optional, adjust the x-coordinate
//       y: 10, // Optional, adjust the y-coordinate
//       html2canvas: {
//         scale: 0.5, // Adjust the scale for content rendering
//       },
//     });
//   }
// }



import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invoice',
  standalone:false,
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css'],
})

export class InvoiceComponent {
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
          this.router.navigate(['/invoiceDetails'], { state: {response:this.shareData} });
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