import { bootstrapApplication } from '@angular/platform-browser';
import {SupplierComponent } from '../Supplier/CustomerApp.SupplierComponent';
import { importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{MainRoutes} from '../Routing/CustomerApp.MainRouting';

bootstrapApplication(SupplierComponent, {
  providers: [
    importProvidersFrom(BrowserModule, FormsModule, ReactiveFormsModule,RouterModule.forRoot(MainRoutes))
  ]
}).catch(err => console.error(err));