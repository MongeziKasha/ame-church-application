import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import{BaseLogger} from '../Utility/CustomerApp.Logger'

@Component({
  templateUrl: './CustomerApp.HomeView.html',
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class HomeComponent {
  _log!:BaseLogger ;
  constructor(_logger:BaseLogger){
    this._log = _logger;
    this._log.Log();
  }
}
