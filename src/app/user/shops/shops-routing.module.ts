import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopsComponent } from './shops.component';

const routes: Routes = [{path:'/shops',component:ShopsComponent,children:[
  {path:"/products",redirectTo:"/products"}
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopsRoutingModule { }
