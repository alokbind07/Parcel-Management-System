import { Component } from '@angular/core';

@Component({
  selector: 'app-customer-dashboard',
  standalone: false,
  
  templateUrl: './customer-dashboard.component.html',
  styleUrl: './customer-dashboard.component.css'
})
export class CustomerDashboardComponent {
  user: any;

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem('user') || '{}');
  }
}
