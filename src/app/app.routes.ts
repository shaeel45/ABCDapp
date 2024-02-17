import { RouterModule, Routes } from '@angular/router';
 
import { NgModule } from '@angular/core';
import { HomeComponent } from './user/home/home/home.component';
import { DashboardComponent } from './admin/dashboard/dashboard/dashboard.component';


export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'admin', component: DashboardComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
