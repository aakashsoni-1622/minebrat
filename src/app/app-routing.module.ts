import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './component/list/list.component';
import { ResultComponent } from './component/result/result.component';

const routes: Routes = [
  {
    path:'result',
    component:ResultComponent,
    pathMatch:'full'
  },
  {
    path:'list',
    component:ListComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
