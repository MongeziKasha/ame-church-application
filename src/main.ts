import { bootstrapApplication } from '@angular/platform-browser';
import { MasterComponent } from './CustomerApp/Home/CustomerApp.MasterComponent';
import { importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainRoutes } from './CustomerApp/Routing/CustomerApp.MainRouting'; // Ensure this path is correct
import { BaseLogger, DbLogger } from './CustomerApp/Utility/CustomerApp.Logger';
import { HttpClient, HttpClientModule } from '@angular/common/http'; 

// Bootstrap the standalone component (MasterComponent)
bootstrapApplication(MasterComponent, {
  providers: [
    importProvidersFrom(FormsModule, ReactiveFormsModule, HttpClient, HttpClientModule, RouterModule.forRoot(MainRoutes)),
    {provide:BaseLogger, useClass:DbLogger} // Remove BrowserModule
  ]
}).catch(err => console.error(err));
