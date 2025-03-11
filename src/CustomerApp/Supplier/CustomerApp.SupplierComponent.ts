import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import{CommonModule} from '@angular/common';

@Component({
  templateUrl: './CustomerApp.SupplierView.html',
  // styleUrl: './app.component.css'
  standalone:true,
  imports: [FormsModule,CommonModule]
})
export class SupplierComponent {}
