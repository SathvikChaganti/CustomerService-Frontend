import {Address} from "./address";

export class Customer {
  id ?: string;
  firstName ?: string;
  lastName ?: string;
  phoneNumber ?: string;
  emailId ?: string;
  billingAccountNumber ?: number;
  address ?: Address;

}
