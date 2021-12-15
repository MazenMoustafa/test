import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"home-page",
    loadChildren:()=>import('./pages/home-page/home-page.module').then(c=>c.HomePageModule)
  },
  {
    path:'',
    redirectTo:'home-page',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
