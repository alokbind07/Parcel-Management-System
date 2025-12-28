import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Define the Booking interface to match the data structure
export interface Booking {
  customerId: string;
  bookingId: string;
  bookingDate: string;
  receiverName: string;
  deliveredAddress: string;
  amount: number;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class OfficerHistoryService {

  private apiUrl = 'http://localhost:8080/admin/bookings';  // Spring Boot backend URL

  constructor(private http: HttpClient) { }

  // Method to fetch all bookings from the backend
  getAllBookings(): Observable<Booking[]> {
    return this.http.get<Booking[]>(this.apiUrl);
  }
}

