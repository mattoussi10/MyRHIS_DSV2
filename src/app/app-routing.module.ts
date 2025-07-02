import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { content } from './shared/routes/routes'
import { ContentComponent } from './shared/layouts/content/content.component'


const routes: Routes = [
  {
    path: '',
    component: ContentComponent,
    //canActivate: [AdminGuard],
    children: content,
  },
  
  {
    path: '**',
    redirectTo: '',
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}