import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import{Customer} from "../Customer/CustomerApp.model";
import{CommonModule} from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  templateUrl: './CustomerApp.CustomerView.html',
  // styleUrl: './app.component.css'
  standalone:true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule]
})
export class CustomerComponent {
  title = 'ame-church-application';
  CustomerModel: Customer = new Customer();
  CustomerModels: Array<Customer> = [];
  Add(){
    this.CustomerModels.push({...this.CustomerModel});
    this.CustomerModel = new Customer();
  }
}
