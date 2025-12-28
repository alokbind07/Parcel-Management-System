import { Component, OnInit } from '@angular/core';

import { CustomerOne, ParcelService } from '../../services/parcelservice.service';
import { Customer } from '../../services/customer.service';



@Component({

 selector: 'app-bookparcel',

 standalone: false,

 templateUrl: './bookparcel.component.html',

 styleUrls: ['./bookparcel.component.css'],

})

export class BookParcelComponent implements OnInit {

  user: any;

  // ngOnInit(): void {
  //   // Retrieve the user details from sessionStorage
  //   this.user = JSON.parse(sessionStorage.getItem('user') || '{}');
  // }

  parcel = {
    User_ID: '',
    User_Name: '',
    User_Address: '',
    Rec_Name: '',
    Rec_Address: '',
    Rec_Pin: '',
    Rec_Mobile: '',
    Par_Weight_Gram: 0,
    Par_Contents_Description: '',
    Par_Delivery_Type: 'Standard', // Default value
    Par_Packing_Preference: 'Normal', // Default value
    Par_PickupTime: '',
    Par_DropoffTime: '',
    Par_ServiceCost: 0,
    Par_PaymentTime: '',
    Booking_ID: 0, // This should be generated dynamically
    Par_Status: 'Not Delivered',
  };

  weightCost: number = 0;  // Variable to store the weight cost
  deliveryTypeCost: number = 30;  // Default cost for 'Standard'
  packingPreferenceCost: number = 30;  // Default cost for 'Normal'

  currentDateTime!: string; // Variable to hold the current date-time for validation

  constructor(private parcelService: ParcelService) {}

  ngOnInit(): void {
    // Set current date and time in the required format for the "min" attribute
    const now = new Date();
    this.currentDateTime = now.toISOString().slice(0, 16); // Format as 'yyyy-MM-ddTHH:mm'


    // Retrieve the user details from sessionStorage
  const userData = sessionStorage.getItem('user');
  if (userData) {
    this.user = JSON.parse(userData);

    // Update the parcel object with values from the user object
    this.parcel.User_ID = this.user.userID || ''; // Replace with the correct property from your backend
    this.parcel.User_Name = this.user.name || ''; // Replace with the correct property from your backend
    this.parcel.User_Address = this.user.city || ''; // Replace with the correct property from your backend
  } else {
    console.error('User data not found in sessionStorage.');
  }
  }

  // Method to generate a random booking ID
  generateBookingId(): void {
    const bookingId = Math.floor(Math.random() * 90000000) + 10000000;
    this.parcel.Booking_ID = bookingId; // Set the generated Booking_ID
  }

  // Method to calculate the parcel service cost
  calculateCost(): void {
    let totalCost = 0;
    const weightInKg = this.parcel.Par_Weight_Gram / 1000; // Convert weight to kg

    // Calculate weight-based cost (10 Rs per kg)
    this.weightCost = weightInKg * 10;  // This will display in the HTML
    totalCost += this.weightCost;

    // Calculate delivery type cost
    switch (this.parcel.Par_Delivery_Type) {
      case 'Express':
        this.deliveryTypeCost = 50;
        break;
      case 'Overnight':
        this.deliveryTypeCost = 100;
        break;
      case 'SameDay':
        this.deliveryTypeCost = 80;
        break;
      default:
        this.deliveryTypeCost = 30; // Standard delivery
        break;
    }
    totalCost += this.deliveryTypeCost;

    // Calculate packing preference cost
    switch (this.parcel.Par_Packing_Preference) {
      case 'Fragile':
        this.packingPreferenceCost = 50;
        break;
      case 'HeavyDuty':
        this.packingPreferenceCost = 70;
        break;
      default:
        this.packingPreferenceCost = 30; // Normal packing
        break;
    }
    totalCost += this.packingPreferenceCost;

    // Set the total service cost
    this.parcel.Par_ServiceCost = totalCost;

    // Set the current system date and time for parcel payment time
    const currentDate = new Date();

    // Convert to IST and format as YYYY-MM-DD HH:mm:ss
    this.parcel.Par_PaymentTime = new Date(
      currentDate.getTime() + 5.5 * 60 * 60 * 1000 // Add 5.5 hours to UTC
    )
      .toISOString()
      .slice(0, 19)
      .replace('T', ' '); // Format as YYYY-MM-DD HH:mm:ss
  }

  // Method to check if the drop-off time is valid
  isDropoffTimeValid(): boolean {
    // Ensure both pickup and drop-off times exist
    if (this.parcel.Par_PickupTime && this.parcel.Par_DropoffTime) {
      return new Date(this.parcel.Par_DropoffTime) > new Date(this.parcel.Par_PickupTime);
    }
    return true; // Valid if drop-off time is not yet entered or if there's no pickup time
  }

  // Method to book the parcel and send data to backend
  bookParcel(): void {
    this.calculateCost();
    this.generateBookingId();

    // Call the parcel service to send the parcel data to the backend
    this.parcelService.bookParcel(this.parcel).subscribe(
      (response) => {
        alert('Parcel booked successfully. Please note the booking ID for further process!');
        console.log(response);
      },
      (error) => {
        alert('Error booking parcel.');
        console.error(error);
      }
    );
  }
}