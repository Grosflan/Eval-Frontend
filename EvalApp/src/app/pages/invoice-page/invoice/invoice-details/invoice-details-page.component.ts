import { Component } from "@angular/core";
import { InvoicesService } from "src/app/api/invoices.service";
import { Invoices } from "src/app/types/invoice";
import { Router, ActivatedRoute } from "@angular/router";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Customer } from "src/app/types/customer";


@Component({
    selector: 'invoice-details',
    templateUrl : './invoice-details-page.component.html'
})

export class InvoiceDetailsPageComponent{
    invoices: Invoices = [];
    customer?: Customer
    id: string;

    constructor(private service: InvoicesService, private router: Router, private route: ActivatedRoute) {
        this.id = this.route.snapshot.params['id'];
    }

    invoiceForm = new FormGroup({
        amount: new FormControl('',[Validators.required]),
        state: new FormControl('',[Validators.required]),
    });

    addCustomer(amount: any, state: any){
        
        this.service
        .createNewInvoice(this.id, state, amount)
        .subscribe((invoices) => this.invoices.push(invoices[0]));

    }

    onSubmit() {
        this.addCustomer(this.invoiceForm.value.amount, this.invoiceForm.value.state);
        this.router.navigateByUrl('/' + this.id);
    }

    navigateToUrl(text: string){
        this.router.navigateByUrl(text);
    }

}