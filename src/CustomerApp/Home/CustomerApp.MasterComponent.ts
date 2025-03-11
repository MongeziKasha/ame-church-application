import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, provideRouter, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'Home', loadComponent: () => import('../Home/CustomerApp.HomeComponent').then(m => m.HomeComponent) },
  { path: 'Customer', loadComponent: () => import('../Customer/CustomerApp.CustomerComponent').then(m => m.CustomerComponent) },
  { path: 'Supplier', loadComponent: () => import('../Supplier/CustomerApp.SupplierComponent').then(m => m.SupplierComponent) },
  { path: '**', redirectTo: 'Home' }
];

@Component({
  selector: 'app-root',
  templateUrl: './CustomerApp.MasterPageView.html',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterOutlet, RouterLink]
})
export class MasterComponent {}
