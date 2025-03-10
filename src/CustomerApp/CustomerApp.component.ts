import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import{Customer} from "./CustomerApp.model";
import{CommonModule} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './CustomerApp.view.html',
  // styleUrl: './app.component.css'
  standalone:true,
  imports: [FormsModule,CommonModule]
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
