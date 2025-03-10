import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import{Customer} from "./CustomerApp.model";

@Component({
  selector: 'app-root',
  templateUrl: './CustomerApp.view.html',
  // styleUrl: './app.component.css'
  standalone:true,
  imports: [FormsModule]
})
export class CustomerComponent {
  title = 'ame-church-application';
  CustomerModel: Customer = new Customer();
  CustomerModels: Array<Customer> = new Array<Customer>();
  Add(){
    this.CustomerModels.push(this.CustomerModel);
    this.CustomerModel = new Customer();
  }
}
