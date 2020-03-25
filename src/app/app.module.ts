import { BrowserModule,Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { homeRoutingModule } from './home/home-routing.module';
import { LoginRoutingModule } from './login/login-routing.module';
import {FormsModule} from '@angular/forms';
import { DbsetupComponent } from './dbsetup/dbsetup.component';
import { DevicelistComponent } from './devicelist/devicelist.component';
import { QuotesComponent } from './quotes/quotes.component';
import { ReportComponent } from './report/report.component';
import { MatInput, MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';









@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DbsetupComponent,
    DevicelistComponent,
    QuotesComponent,
    ReportComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    homeRoutingModule,
    LoginRoutingModule,
    FormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
  MatTabsModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
