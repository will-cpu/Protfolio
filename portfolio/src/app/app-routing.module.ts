import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageOneComponent } from './pages/page-one/page-one.component';
// import { PageThreeComponent } from './pages/page-three/page-three.component';
// import { PageTwoComponent } from './pages/page-two/page-two.component';


const routes: Routes = [
  { path: "p1", component:  PageOneComponent},
  // { path: "p2", component:  PageTwoComponent},
  // { path: "p3", component: PageThreeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
