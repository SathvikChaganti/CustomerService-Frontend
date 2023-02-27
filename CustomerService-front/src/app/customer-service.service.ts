import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Customer} from "./customer";
import {Observable} from "rxjs";

@Injectable()
export class CustomerServiceService {
  private billingAccountNumber: any;
  constructor(private http: HttpClient) {
  }

  public findAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>('http://localhost:8081/getcustomers');
  }

  public save(customer: Customer) {
    return this.http.post<Customer>('http://localhost:8081/create', customer);
  }

  deleteCustomer(billingAccountNumber: any) {
    return this.http.delete('http://localhost:8081/' + billingAccountNumber, {})
  }

  getCustomer(billingAccountNumber: any){
    return this.http.get<Customer>('http://localhost:8081/'+ billingAccountNumber)
  }

  public updateCustomer(billingAccountNumber: any, customer: Customer) {
    return this.http.put<Customer>('http://localhost:8081/'+ billingAccountNumber,customer);
  }

}
