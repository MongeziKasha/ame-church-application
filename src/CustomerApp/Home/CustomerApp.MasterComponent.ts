import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterOutlet, RouterLink, provideRouter, Routes } from '@angular/router';

// ✅ Define routes
const appRoutes: Routes = [
  { path: 'Home', loadComponent: () => import('../Home/CustomerApp.HomeComponent').then(m => m.HomeComponent) },
  { path: 'Customer', loadComponent: () => import('../Customer/CustomerApp.CustomerComponent').then(m => m.CustomerComponent) },
  { path: 'Supplier', loadComponent: () => import('../Supplier/CustomerApp.SupplierComponent').then(m => m.SupplierComponent) },
  { path: '**', redirectTo: 'Home' } // Default route
];

@Component({
  selector: 'app-root',
  templateUrl: './CustomerApp.MasterPageView.html',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterOutlet, RouterLink]
})
export class MasterComponent {}

// ✅ Bootstrap with the router
bootstrapApplication(MasterComponent, {
  providers: [provideRouter(appRoutes)] // ✅ Provide ActivatedRoute here
}).catch(err => console.error(err));