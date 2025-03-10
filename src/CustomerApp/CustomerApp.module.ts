import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { CustomerComponent } from './CustomerApp.component';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CustomerComponent,
    ReactiveFormsModule 
  ],
  exports: [
    CustomerComponent
  ],
  providers: [],
  bootstrap: [CustomerComponent]
})
export class CustomerModule { }