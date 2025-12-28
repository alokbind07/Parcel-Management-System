import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
 providedIn: 'root'
})

export class LoginService {
  private baseUrl = "http://localhost:8080";

 constructor(private http: HttpClient) {}
 login(userID: string, password: string): Observable<any> {
   const loginData = {
    userID: userID,
     password: password
   };
   // Make a POST request to the backend
   return this.http.post<any>(`${this.baseUrl}/users/login`, loginData);
 }

}


