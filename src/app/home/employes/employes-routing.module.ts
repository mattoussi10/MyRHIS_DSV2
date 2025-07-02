import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsEmployeComponent } from './pages/details-employe/details-employe.component';

const routes: Routes = [  {
    path: 'add',
    component: DetailsEmployeComponent,
  },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployesRoutingModule { }
