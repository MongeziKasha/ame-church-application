import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import{CommonModule} from '@angular/common';
import { BaseLogger } from '../Utility/CustomerApp.Logger';

@Component({
  templateUrl: './CustomerApp.SupplierView.html',
  // styleUrl: './app.component.css'
  standalone:true,
  imports: [FormsModule,CommonModule]
})
export class SupplierComponent {
  _log!:BaseLogger;
  constructor(_logger:BaseLogger){
    this._log = _logger;
    this._log.Log();
  }
}
