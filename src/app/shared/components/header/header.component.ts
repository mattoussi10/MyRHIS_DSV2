import { Component } from '@angular/core';
import { SidebarService } from 'src/app/core/services/sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone :true
})
export class HeaderComponent {
constructor(private sidebarService: SidebarService) {}

  toggleSidebar() {
    console.log("eeee")
    this.sidebarService.toggleSidebar();
  }
}
