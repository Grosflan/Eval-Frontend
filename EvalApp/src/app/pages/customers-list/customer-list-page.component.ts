import { Component } from "@angular/core";
import { CustomersService } from "src/app/api/customers.service";
import { Customers } from '../../types/customer'
import { Router } from "@angular/router";

@Component({
    selector: "customer-list-page",
    templateUrl: 'customer-list-page.component.html'
})

export class CustomerListPageComponent {
    customers:  Customers = [];

    constructor(private router: Router, private service: CustomersService) { }

    ngOnInit() {
        this.service
            .findAll()
            .subscribe((customers) => this.customers = customers)
    }

    addCustomer(email: string, name: string) {
        this.service
            .createNewUser(email, name)
            .subscribe((customers) => this.customers.push(customers[0]));
    }

    navigateToUrl(text:any){
        this.router.navigateByUrl('/' + text)
    }
}