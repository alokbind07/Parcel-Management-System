import { Component } from '@angular/core';

@Component({
  selector: 'app-component-navbar',
  standalone: false,
  
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  user: any;

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem('user') || '{}');
  }

  logout(): void {
    sessionStorage.clear();
  }
}
