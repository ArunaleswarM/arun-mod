import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DbsetupComponent } from './dbsetup/dbsetup.component';
import { ReportComponent } from './report/report.component';
import { DevicelistComponent } from './devicelist/devicelist.component';
import { QuotesComponent } from './quotes/quotes.component';





 const appRoutes: Routes = [{path:'', pathMatch:'full' ,redirectTo:'/login'},
{path:'login', component:LoginComponent},
{path:'home', component:HomeComponent},
{path:'dbsetup', component:DbsetupComponent},
{path:'devicelist', component:DevicelistComponent},
{path:'quotes', component:QuotesComponent},

{path:'report', component:ReportComponent},

{path:'**', pathMatch:'full' ,redirectTo:'/login'}


];








@NgModule({
   imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
