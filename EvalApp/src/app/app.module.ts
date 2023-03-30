import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CustomersService } from './api/customers.service';
import { InvoicesService } from './api/invoices.service';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomerFormPageComponent } from './pages/customer-form/customer-form-page.component';
import { CustomerDetailsPageComponent } from './pages/customers-details/customer-details-page.component';
import { InvoiceListComponent } from './pages/invoice-page/invoice/invoice-list/invoice-list.component'
import { CustomerListPageComponent } from './pages/customers-list/customer-list-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { InvoiceDetailsPageComponent} from './pages/invoice-page/invoice/invoice-details/invoice-details-page.component'

const routes: Routes = [
  { path: '', component: CustomerListPageComponent},
  { path: 'create', component: CustomerFormPageComponent},
  { path: ':id', component: CustomerDetailsPageComponent},
  { path: ':id/invoices/add', component: InvoiceDetailsPageComponent}


];

@NgModule({
  declarations: [
    AppComponent,    
    InvoiceDetailsPageComponent,
    CustomerFormPageComponent,
    CustomerDetailsPageComponent,
    CustomerListPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    NgbModule
  ],
  providers: [
    CustomersService,
    InvoicesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
