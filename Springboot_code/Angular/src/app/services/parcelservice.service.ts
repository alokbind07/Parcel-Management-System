import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface CustomerOne {

 User_ID: String;
 User_Name: String;
 User_Address: String;
 Rec_Name: String;
 Rec_Address: String;
 Rec_Pin: String;
 Rec_Mobile: String;
 Par_Weight_Gram: number;
 Par_Contents_Description: String;
 Par_Delivery_Type: String;
 Par_Packing_Preference: String;
 Par_PickupTime: String;
 Par_DropoffTime: String;
 Par_ServiceCost: number;
 Par_PaymentTime: String;
 Booking_ID: number;
 Par_Status: String;
}

@Injectable({
 providedIn: 'root'
})

export class ParcelService {
 private baseUrl = 'http://localhost:8080/bookings/register'; 

 constructor(private http: HttpClient) { }

 // Method to book a parcel

 bookParcel(parcel: CustomerOne): Observable<any> {
  console.log(parcel);
  
   return this.http.post(`${this.baseUrl}`, parcel);
 }
}

