import { Component, OnInit } from '@angular/core';
import {Customer} from "../customer";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {CustomerServiceService} from "../customer-service.service";


@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
  constructor(private route: ActivatedRoute,
              private router: Router,
              private customer: CustomerServiceService,
              private fb: FormBuilder) {
  }

  customerBillingAccountNumber: any;

  customerData = {
  }
  updateForm !: FormGroup;

  ngOnInit() {
    this.customerBillingAccountNumber = this.route.snapshot.paramMap.get('billingAccountNumber');
    console.log(this.customerBillingAccountNumber);
    this.updateForm = this.fb.group({
      firstName: [{value: '', disabled: true}],
      lastName: [{value: '', disabled: true}],
      emailId: [''],
      billingAccountNumber:[{value: '', disabled: true}],
      phoneNumber: [{value: '', disabled: true}],
      address: this.fb.group({
        addressLine1: [''],
        addressLine2: [''],
        city: [''],
        state: [''],
        zipCode: [''],
      }),
    })
    this.updateForm.patchValue(this.customerData);
    this.customer.getCustomer(this.customerBillingAccountNumber).subscribe((data) => {
      console.log(data)
     this.updateForm.patchValue(data);
    })
  }
  update(){
    console.log(this.updateForm.value);
    this.customer.updateCustomer(this.customerBillingAccountNumber, this.updateForm.value).subscribe(response => {
      console.log(response);
    });
  }
}
