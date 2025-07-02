import { NgModule } from '@angular/core'
import { CommonModule, DatePipe, DecimalPipe } from '@angular/common'

import { SharedRoutingModule } from './shared-routing.module'

import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router';
import { ContentComponent } from './layouts/content/content.component'
import { HeaderComponent } from './components/header/header.component'
import { SidebarComponent } from './components/sidebar/sidebar.component'



@NgModule({
  declarations: [
   
 
    ContentComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  HeaderComponent,
  SidebarComponent
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    CommonModule,
    HeaderComponent,
    DatePipe,
    SidebarComponent
  
  ],
  providers: [DatePipe],
})
export class SharedModule {}