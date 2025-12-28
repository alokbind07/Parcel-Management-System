import { Component } from '@angular/core';

@Component({
  selector: 'app-component-officer-navbar',
  standalone: false,
  
  templateUrl: './officer-navbar.component.html',
  styleUrl: './officer-navbar.component.css'
})
export class OfficerNavbarComponent {
  user: any;

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem('user') || '{}');
  }

  logout(): void {
    sessionStorage.clear();
  }
}
