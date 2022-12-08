import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchEmployeeComponent } from './search-employee/search-employee.component'

const myRoute:Routes=[
  {
    path:"",
    component:AddEmployeeComponent
  },
  {
    path:"view",
    component:ViewEmployeeComponent
  },
  {
    path:"search",
    component:SearchEmployeeComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    ViewEmployeeComponent,
    NavbarComponent,
    SearchEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
