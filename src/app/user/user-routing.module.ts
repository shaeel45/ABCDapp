import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { ProductsComponent } from './shops/productpage/products/products.component';

const routes: Routes = [
  {path:'', component:HomeComponent,
},{
  path:'/productpage', component:ProductsComponent 
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
