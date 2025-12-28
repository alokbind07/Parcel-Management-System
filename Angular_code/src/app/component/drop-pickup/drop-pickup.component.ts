import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-drop-pickup',
  standalone: false,

  templateUrl: './drop-pickup.component.html',
  styleUrl: './drop-pickup.component.css'
})
export class DropPickupComponent {
  bookingId: string = ''; // Booking ID entered by the user
  pickupTime: string = ''; // Pickup time entered by the user
  dropTime: string = ''; // Drop-off time entered by the user
  apiUrl: string = "http://localhost:8080/bookings/schedule"; // API URL for scheduling booking

  constructor(private http: HttpClient) {}

  onUpdateTimes() {
    // Validate inputs
    if (!this.bookingId || !this.pickupTime || !this.dropTime) {
      alert('Please fill out all fields.');
      return;
    }

    // Parse pickup and drop times as Date objects
    const currentTime = new Date();
    const pickupDate = new Date(this.pickupTime);
    const dropDate = new Date(this.dropTime);
   
    // Constraint 1: Pickup time should not be less than the current time
    if (pickupDate < currentTime) {
      alert('Pickup time cannot be earlier than the current time.');
      return;
    }

    // Constraint 2: Drop-off time should be greater than pickup time
    if (dropDate < pickupDate) {
      alert('Drop-off time must be later than the pickup time.');
      return;
    }

    // Prepare data for the API call
    const params = {
      bookingId: this.bookingId,
      pickupTime: this.pickupTime,
      dropoffTime: this.dropTime
    };

    // Make the API call to update times
    this.http.post(this.apiUrl, null, { params }).subscribe(
      (response: any) => {
        // Process the response from the backend
        const message = JSON.parse(response); // Assuming response is a JSON string
        alert(message);
      },
      (error) => {
        console.error('Error occurred while updating times:', error);
        alert('An error occurred. Please try again later.');
      }
    );

    alert('Pickup & Drop time has been updated successfully.');
  }
}