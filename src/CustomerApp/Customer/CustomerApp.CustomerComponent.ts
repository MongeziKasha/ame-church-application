import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import{Customer} from "../Customer/CustomerApp.model";
import{CommonModule} from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import{BaseLogger} from '../Utility/CustomerApp.Logger'

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
  _log!:BaseLogger;
  constructor(_logger:BaseLogger){
    this._log= _logger;
    this._log.Log();
  }
  Add(){
    this.CustomerModels.push({...this.CustomerModel});
    this.CustomerModel = new Customer();
  }
}
