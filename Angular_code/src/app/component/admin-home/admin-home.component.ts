import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-home',
  standalone: false,
  
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.css'
})
export class AdminHomeComponent {
  user: any;

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem('user') || '{}');
  }
}
