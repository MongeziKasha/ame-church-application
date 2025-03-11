import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import{CommonModule} from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  templateUrl: './CustomerApp.HomeView.html',
  // styleUrl: './app.component.css'
  standalone:true,
  imports: [FormsModule,CommonModule,BrowserModule]
})
export class HomeComponent {

  }
