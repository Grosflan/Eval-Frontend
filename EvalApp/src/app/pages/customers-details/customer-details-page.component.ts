import { Component } from '@angular/core'
import { CustomersService } from '../../api/customers.service'
import { Customer } from '../../types/customer';
import { ActivatedRoute, Router } from '@angular/router';
import { InvoicesService } from 'src/app/api/invoices.service';
import { Invoices } from 'src/app/types/invoice';


@Component({
    selector: 'customer-details-page',
    templateUrl : './customer-details-page.component.html'
})


export class CustomerDetailsPageComponent {
    customer?: Customer;
    invoices?: Invoices;

    constructor(private route: ActivatedRoute, private service: CustomersService,private invoiceService: InvoicesService,private router: Router) { }

    ngOnInit() {
        const id: number = Number(this.route.snapshot.paramMap.get('id'));

        this.service
            .findOne(id)
            .subscribe(customer => this.customer = customer[0]);
        
        this.invoiceService.findAllForClient(id)
            .subscribe((invoices) => {
                this.invoices = invoices;
            })

        
    }


    navigateToUrl(text: string){
        this.router.navigateByUrl(text);
    }
}