import { bootstrapApplication } from '@angular/platform-browser';
import { CustomerComponent } from '../Customer/CustomerApp.CustomerComponent';
import { importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{MainRoutes} from '../Routing/CustomerApp.MainRouting';
import{GridComponent} from '../Utility/CustomerApp.Grid.Component'
import { HttpClient } from '@angular/common/http'; 

bootstrapApplication(CustomerComponent, {
  providers: [
    importProvidersFrom(BrowserModule, FormsModule, HttpClient, ReactiveFormsModule,RouterModule.forChild(MainRoutes))
  ]
}).catch(err => console.error(err));