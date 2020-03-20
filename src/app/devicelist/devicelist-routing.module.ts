import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DevicelistComponent } from './devicelist.component';




const routes: Routes = [{path:'/devicelist',component:DevicelistComponent}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class devicelistRoutingModule { }
