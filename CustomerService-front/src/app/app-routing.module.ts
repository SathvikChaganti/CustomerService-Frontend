import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateCustomerComponent } from "./create-customer/create-customer.component";
import { GetCustomersComponent } from "./get-customers/get-customers.component";
import {UpdateCustomerComponent} from "./update-customer/update-customer.component";

const routes: Routes = [
  { path: 'view', component: GetCustomersComponent },
  { path: 'create', component: CreateCustomerComponent },
  { path: 'update/:billingAccountNumber', component: UpdateCustomerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
