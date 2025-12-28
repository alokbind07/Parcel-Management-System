import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


// Define the structure of the data you're sending and receiving from the backend

export interface Customer {

  name : String;
  email : String;
  countrycode :String;
  mobNo : String;
  street : String;
  city : String;
  state: String;
  postal_code : String;
  userID : String;
  password : String;
  cPassword : String;

}



//interface table 

@Injectable({
  providedIn: 'root',
})
export class CustomerService {

  private apiUrl = 'http://localhost:8080/users/register';
  private header = {'Content-Type':'application/json;'};
  constructor(private http: HttpClient) {}

  register(customerData: Customer): Observable<any> {
    return this.http.post(this.apiUrl, customerData, {headers: this.header});
  }
}
