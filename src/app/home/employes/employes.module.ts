import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployesRoutingModule } from './employes-routing.module';
import { DetailsEmployeComponent } from './pages/details-employe/details-employe.component';
import { DetailsEmployeHeaderComponent } from './components/details-employe-header/details-employe-header.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListEmployesComponent } from './components/list-employes/list-employes.component';
import { RecapEmployeComponent } from './components/recap-employe/recap-employe.component';


@NgModule({
  declarations: [
    DetailsEmployeComponent,
    DetailsEmployeHeaderComponent,
    ListEmployesComponent,
    RecapEmployeComponent
  ],
  imports: [
    SharedModule,
    EmployesRoutingModule
  ]
})
export class EmployesModule { }
