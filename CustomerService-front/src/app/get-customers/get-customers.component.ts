import {Component, OnInit, ViewChild} from '@angular/core';
import {Customer} from "../customer";
import {CustomerServiceService} from "../customer-service.service";

@Component({
  selector: 'app-get-customers',
  templateUrl: './get-customers.component.html',
  styleUrls: ['./get-customers.component.css']
})
export class GetCustomersComponent implements OnInit {

  customers: Customer[] = [];
  constructor(private customerService: CustomerServiceService) {
  }

  ngOnInit() {
    this.customerService.findAll().subscribe(data => {
      this.customers = data;
    });
  }

  deleteCustomer(billingAccountNumber: any) {
    console.log(billingAccountNumber);
    this.customerService.deleteCustomer(billingAccountNumber).subscribe((res) => {
      console.log(res);
    })
  }

  // @ts-ignore
  updateCustomer(billingAccountNumber: any) {
    let currentCustomer = this.customers.find((c) => {return c.billingAccountNumber === billingAccountNumber})
    console.log(currentCustomer);
  }
}
