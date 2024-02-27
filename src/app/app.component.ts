import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { AppRoutingModule } from './app.routes';
import { AdminModule } from './admin/admin.module';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "./user/Layout/Header/footer/footer.component";
import { HeaderComponent } from './user/Layout/Header/header/header.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet,HeaderComponent,FooterComponent]
})
export class AppComponent {
  title = 'abcd_app';
}
