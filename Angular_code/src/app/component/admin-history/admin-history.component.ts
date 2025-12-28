import { Component } from '@angular/core';
import { OfficerHistoryService } from '../../services/adminHistoryService';

@Component({
  selector: 'app-admin-history',
  standalone: false,
  
  templateUrl: './admin-history.component.html',
  styleUrl: './admin-history.component.css'
})
export class AdminHistoryComponent {
  bookings: any[] = [];  // Holds the list of bookings

  constructor(private officerHistoryService: OfficerHistoryService) {}

  ngOnInit(): void {
    // Fetch the bookings when the component initializes
    this.officerHistoryService.getAllBookings().subscribe(
      (data: any) => {
        this.bookings = data;  // Assign fetched data to bookings
      },
      (error) => {
        console.error('Error fetching bookings', error);  // Handle errors
      }
    );
  }
}
