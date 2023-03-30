import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Invoices } from '../types/invoice'
import { Customer } from '../types/customer'

export const API_URL = "https://vcwspvfmxcnfklnezbsq.supabase.co/rest/v1/invoices";
export const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZjd3NwdmZteGNuZmtsbmV6YnNxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc3NTk5NTAsImV4cCI6MTk5MzMzNTk1MH0.dOPmFAKGeHXDPDCv9rlfOqKMja4mhhKA22QJg00Iyy8";

@Injectable()
export class InvoicesService{
    
    constructor(private http: HttpClient) {}


    createNewInvoice(customer_id: string, state: string, amount: number): Observable<Invoices> {
        return this.http.post<Invoices>(API_URL, {
            customer_id: customer_id,
            state: state,
            amount: amount
        }, {
            headers: {
                "Content-type": "application/json",
                apiKey: API_KEY,
                Prefer: "return=representation"
            }
        });
    }

    findAllForClient(id: number): Observable<Invoices> {
        return this.http.get<Invoices>(API_URL + '?customer_id=eq.' + id, {
            headers: {
                "Content-Type": "application/json",
                apiKey: API_KEY,
                Prefer: "return=representation"
            }
        })
    }

    setInvoiceState(customer: Customer, state: string): Observable<Invoices> {
        return this.http.patch<Invoices>(API_URL + '?id=eq.' + customer.id, {
            state: state
        },{
            headers: {
                "Content-Type": "application/json",
                apiKey: API_KEY,
                Prefer: "return=representation"
            }
        })
    }

}