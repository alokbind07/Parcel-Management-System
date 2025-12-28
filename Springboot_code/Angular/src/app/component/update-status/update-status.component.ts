import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-update-status',
  standalone: false,

  templateUrl: './update-status.component.html',
  styleUrl: './update-status.component.css'
})
export class ParcelStatusComponent {
  bookingId: string = ''; // Booking ID entered by the user
  parStatus: string = ''; // Selected parcel status
  currentStatus: string = ''; // Current status of the parcel
  apiUrl: string = "http://localhost:8080/bookings/update-status"; // API URL for updating the parcel status

  constructor(private http: HttpClient) {}

  onUpdateStatus() {
    // Validate inputs
    if (!this.bookingId || !this.parStatus) {
      alert('Please fill out all fields.');
      return;
    }

    // Fetch current status from the backend before updating (mock example)
    this.getCurrentStatus().then(() => {
      // Apply constraints based on current status
      if (this.currentStatus === 'Delivered' && (this.parStatus === 'Booked' || this.parStatus === 'In-Transit')) {
        alert('Parcel status cannot be changed to "Booked" or "In-Transit" after being marked as "Delivered".');
        return;
      }

      if (this.currentStatus === 'In-Transit' && this.parStatus === 'Booked') {
        alert('Parcel status cannot be changed to "Booked" once it is "In-Transit".');
        return;
      }

      if (this.currentStatus === 'Returned' && (this.parStatus === 'Booked' || this.parStatus === 'In-Transit' || this.parStatus === 'Delivered')) {
        alert('Parcel status cannot be changed to "Booked", "In-Transit", or "Delivered" after being marked as "Returned".');
        return;
      }

      // Prepare data for the API call
      const params = {
        bookingId: this.bookingId,
        parStatus: this.parStatus
      };

      // Make the API call to update the parcel status
      this.http.post(this.apiUrl, null, { params }).subscribe(
        (response: any) => {
          const message = response.message || 'Parcel status updated successfully.';
          alert(message);
        },
        (error) => {
          console.error('Error occurred while updating parcel status:', error);
          alert('An error occurred. Please try again later.');
        }
      );
    });
  }

  // Mock function to simulate fetching the current parcel status
  async getCurrentStatus(): Promise<void> {
    // Simulate API call to fetch current status
    const apiEndpoint = `http://localhost:8080/bookings/search/${this.bookingId}`;
    try {
      const response: any = await this.http.get(apiEndpoint).toPromise();
      this.currentStatus = response.Par_Status || ''; // Set the current status from response
    } catch (error) {
      console.error('Error fetching current parcel status:', error);
      alert('Unable to fetch current parcel status. Please try again later.');
      throw error; // Prevent further execution if status cannot be fetched
    }
  }
}