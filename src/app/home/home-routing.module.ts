import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { LoginComponent } from '../login/login.component';
import { DbsetupComponent } from '../dbsetup/dbsetup.component';
import { DevicelistComponent } from '../devicelist/devicelist.component';
import { QuotesComponent } from '../quotes/quotes.component';
import { ReportComponent } from '../report/report.component';




const homeRoutes: Routes = [{path:'', pathMatch:'full' ,redirectTo:'/login'},
{path:'login', component:LoginComponent},
{path:'home', component:HomeComponent},
{path:'dbsetup', component:DbsetupComponent},
{path:'devicelist', component:DevicelistComponent},
{path:'quotes', component:QuotesComponent},

{path:'report', component:ReportComponent},

{path:'**', pathMatch:'full' ,redirectTo:'/login'}


];


@NgModule({
  imports: [RouterModule.forRoot(homeRoutes)],
  exports: [RouterModule]
})
export class homeRoutingModule { }
