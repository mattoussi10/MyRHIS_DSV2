import { Routes } from '@angular/router'



export const content: Routes = [
 
   {
    path: '',
    loadChildren: () =>
      import('../../../app/home/employes/employes.module').then(
        (m) => m.EmployesModule
      ),
    
  }
];

