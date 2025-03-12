import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BaseLogger } from '../Utility/CustomerApp.Logger';
import { Customer } from '../Customer/CustomerApp.model'; // Adjust the import path as necessary
import { GridComponent } from '../Utility/CustomerApp.Grid.Component';

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

    constructor(_logger: BaseLogger) {
        this._log = _logger;
        this._log.Log();
    }

    SelectCustomer(_selected: Customer) { // Ensure this parameter is of type Customer
        this.CustomerModel = _selected;
    }

    Add() {
        this.CustomerModels.push({ ...this.CustomerModel });
        this.CustomerModel = new Customer();
    }
}