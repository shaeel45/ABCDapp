import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { HomeComponent } from './home/home/home.component';
import { HeaderComponent } from "./Layout/Header/header/header.component";
import { FooterComponent } from "./Layout/Header/footer/footer.component"; 

@NgModule({
    declarations: [HomeComponent],
    imports: [
        CommonModule,
        UserRoutingModule,
        HeaderComponent,
        FooterComponent
    ]
})
export class UserModule { }
