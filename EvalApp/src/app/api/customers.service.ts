import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Customers } from '../types/customer'

export const API_URL = "https://vcwspvfmxcnfklnezbsq.supabase.co/rest/v1/customers";
export const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZjd3NwdmZteGNuZmtsbmV6YnNxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc3NTk5NTAsImV4cCI6MTk5MzMzNTk1MH0.dOPmFAKGeHXDPDCv9rlfOqKMja4mhhKA22QJg00Iyy8";

@Injectable()
export class CustomersService{
    
    constructor(private http: HttpClient) {}

    findAll(): Observable<Customers>{
        return this.http.get<Customers>(API_URL, {
            headers: {
                "Content-Type": "application/json",
                apiKey: API_KEY
            }
        });
    }

    createNewUser(email: string, fullName: string): Observable<Customers> {
        return this.http.post<Customers>(API_URL, {
            email: email,
            fullName: fullName
        }, {
            headers: {
                "Content-type": "application/json",
                apiKey: API_KEY,
                Prefer: "return=representation"
            }
        });
    }

    findOne(id: number): Observable<Customers> {
        return this.http.get<Customers>(API_URL + '?id=eq.' + id, {
            headers: {
                "Content-Type": "application/json",
                apiKey: API_KEY,
                Prefer: "return=representation"
            }
        })
    }
}