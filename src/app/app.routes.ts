import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import path from 'path';
import { Component } from '@angular/core';
import { LoginComponent } from './auth/Components/login/login.component';

export const routes: Routes = [{path:'auth', component:AuthComponent, children:[
    {path:"login", component:LoginComponent}
]}];
