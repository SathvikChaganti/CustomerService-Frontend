import {Component, OnInit} from '@angular/core';
import {Customer} from "../customer";
import {ActivatedRoute, Router} from "@angular/router";
import {CustomerServiceService} from "../customer-service.service";
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {


  customer : Customer;
  createForm !: FormGroup;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private customerService: CustomerServiceService,
              private fb:FormBuilder) {
    this.customer = new Customer();
  }

  submit() {
    console.log(this.createForm.value)
    this.customerService.save(this.createForm.value).subscribe(result => this.gotoCustomerList());
  }

  gotoCustomerList() {
    this.router.navigate(['/view']);
  }

  ngOnInit() {
    this.createForm = this.fb.group({
      firstName: [''],
      lastName:[''],
      emailId:[''],
      phoneNumber:[''],
      address:this.fb.group({
        addressLine1:[''],
        addressLine2:[''],
        city:[''],
        state:[''],
        zipCode:[''],
      }),
    })
  }

}
