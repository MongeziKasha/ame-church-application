import { bootstrapApplication } from '@angular/platform-browser';
import { CustomerComponent } from '../Customer/CustomerApp.CustomerComponent';
import { importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{MainRoutes} from '../Routing/CustomerApp.MainRouting';

bootstrapApplication(CustomerComponent, {
  providers: [
    importProvidersFrom(BrowserModule, FormsModule, ReactiveFormsModule,RouterModule.forChild(MainRoutes))
  ]
}).catch(err => console.error(err));