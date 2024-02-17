import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  Routes } from '@angular/router';
import { PublicComponent } from './public.component';
import { HomepageComponent } from './Components/homepage/homepage.component';

const routes: Routes=[
  {path:'',component: PublicComponent,children:[{
    path:'', component: HomepageComponent
  }]}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class PublicModule { }
