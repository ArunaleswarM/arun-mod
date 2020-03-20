import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DbsetupComponent } from './dbsetup.component';




const routes: Routes = [{path:'/dbsetup',component:DbsetupComponent}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class dbsetupRoutingModule { }
