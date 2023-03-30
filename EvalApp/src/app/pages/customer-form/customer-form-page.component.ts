import { Component, Output, EventEmitter} from '@angular/core'
import { FormGroup, FormControl, Validators } from "@angular/forms"
import { CustomersService } from 'src/app/api/customers.service';
import { Customers } from 'src/app/types/customer';
import { Router } from '@angular/router';
@Component({
    selector: 'customer-form-page',
    templateUrl: './customer-form-page.component.html'
})


export class CustomerFormPageComponent {
    customers: Customers = [];

    constructor(private service: CustomersService, private router: Router) {}

    profileForm = new FormGroup({
        fullName: new FormControl('',[Validators.required]),
        email: new FormControl('',[Validators.required]),
    });

    addCustomer(fullName: any, email: any){
        this.service
        .createNewUser(email,fullName)
        .subscribe((customers) => this.customers.push(customers[0]));

    }

    onSubmit() {
        this.addCustomer(this.profileForm.value.fullName, this.profileForm.value.email);
        this.router.navigateByUrl('/')
    }

    navigateToUrl(text: string){
        this.router.navigateByUrl(text);
    }

}