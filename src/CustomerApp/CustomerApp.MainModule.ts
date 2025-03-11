import { bootstrapApplication } from '@angular/platform-browser';
import { MasterComponent } from './Home/CustomerApp.MasterComponent';
import { importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{MainRoutes} from './Routing/CustomerApp.MainRouting'

bootstrapApplication(MasterComponent, {
  providers: [
    importProvidersFrom(BrowserModule, FormsModule, ReactiveFormsModule,RouterModule.forRoot(MainRoutes))
  ]
}).catch(err => console.error(err));