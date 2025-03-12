import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BaseLogger } from '../Utility/CustomerApp.Logger';
import { Customer } from '../Customer/CustomerApp.model';
import { GridComponent } from '../Utility/CustomerApp.Grid.Component';
import { HttpClient } from '@angular/common/http'; 
import { catchError, tap } from 'rxjs/operators'; 
import { of } from 'rxjs'; 

@Component({
    templateUrl: './CustomerApp.CustomerView.html',
    standalone: true,
    imports: [FormsModule, CommonModule, ReactiveFormsModule, GridComponent]
})
export class CustomerComponent {
    title = 'ame-church-application';
    CustomerModel: Customer = new Customer();
    CustomerModels: Array<Customer> = [];
    _log!: BaseLogger;
    Disable:boolean = false;
    
    constructor(_logger: BaseLogger, public http: HttpClient) {
        this._log = _logger;
        this._log.Log();
    }

    SelectCustomer(_selected: Customer) {
        this.CustomerModel = _selected;
    }

    postToServer() {
        const custDto = {
            CustomerCode: this.CustomerModel.CustomerCode,
            CustomerName: this.CustomerModel.CustomerName,
            CustomerAmount: this.CustomerModel.CustomerAmount
        };
        this.Disable= true;
        this.http.post("http://localhost:3000/customers", custDto)
            .pipe(
                tap((res: any) => this.Success(res)), 
                catchError((error) => {
                    this.Error(error); 
                    return of(null); 
                })
            )
            .subscribe();
    }
    getFromServer() {

        this.http.get("http://localhost:3000/customers")
            .pipe(
                tap((res: any) => this.Success(res)), 
                catchError((error) => {
                    this.Error(error); 
                    return of(null); 
                })
            )
            .subscribe();
    }
    Error(res: any) {
        console.error('Error:', res); 
    }

    Success(res: any) {
       this.getFromServer();
       this.Disable=false;
       this.CustomerModel = new Customer();
    }
    SuccessGet(res:any){
        if (res) {
            this.CustomerModels.push(res); 
        }
    }
    Add() {
        this.CustomerModels.push({ ...this.CustomerModel });
        this.CustomerModel = new Customer();
    }
}