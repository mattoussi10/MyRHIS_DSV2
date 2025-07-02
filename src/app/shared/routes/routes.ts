import { Routes } from '@angular/router'



export const content: Routes = [
 
   {
    path: 'employes',
    loadChildren: () =>
      import('../../../app/home/employes/employes.module').then(
        (m) => m.EmployesModule
      ),
    
  }
];

