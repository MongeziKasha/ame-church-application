import { bootstrapApplication } from '@angular/platform-browser';
import { MasterComponent } from './CustomerApp/Home/CustomerApp.MasterComponent';
import { importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Bootstrap the standalone component (MasterComponent)
bootstrapApplication(MasterComponent, {
  providers: [
    importProvidersFrom(BrowserModule, FormsModule, ReactiveFormsModule)
  ]
}).catch(err => console.error(err));
