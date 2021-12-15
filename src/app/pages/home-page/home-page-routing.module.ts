import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { HomePage2Component } from './home-page2/home-page2.component';

const routes: Routes = [
  {
    path:"",
    component:HomePageComponent,
  }
  ,
  {
    path:":homePageId",
    component:HomePage2Component,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
