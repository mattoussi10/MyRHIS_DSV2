import { Component } from '@angular/core';
import { Router } from '@angular/router';

import {HeaderComponent} from '../../components/header/header.component';
import { SidebarService } from 'src/app/core/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  standalone :true
})
export class SidebarComponent {
mobileScreen: MediaQueryList;

isOpen = true;
  constructor(private router: Router,private sidebarService: SidebarService) {
    this.mobileScreen = window.matchMedia('(max-width: 990px)');
  }
  

  ngOnInit() {
    //this.setupEventListeners();
    this.sidebarService.sidebarOpen$.subscribe((open) => {
      this.isOpen = open;
    });
  }

  // setupEventListeners() {
  //   document.querySelectorAll('.dashboard-nav-dropdown-toggle').forEach((item) => {
  //     item.addEventListener('click', (event) => {
  //       const closestDropdown = item.closest('.dashboard-nav-dropdown');
  //       if (!closestDropdown) return;  // Vérification null

  //       closestDropdown.classList.toggle('show');

  //       closestDropdown.querySelectorAll('.dashboard-nav-dropdown').forEach((subDropdown) => {
  //         if (subDropdown !== closestDropdown) {
  //           subDropdown.classList.remove('show');
  //         }
  //       });

  //       const parent = closestDropdown.parentElement;
  //       if (!parent) return;  // Vérification null

  //       parent.querySelectorAll(':scope > .dashboard-nav-dropdown').forEach((sibling) => {
  //         if (sibling !== closestDropdown) {
  //           sibling.classList.remove('show');
  //         }
  //       });
  //     });
  //   });

  //   document.querySelectorAll('.menu-toggle').forEach((item) => {
  //     item.addEventListener('click', (event) => {
  //       const nav = document.querySelector('.dashboard-nav');
  //       const dashboard = document.querySelector('.dashboard');
  //       if (this.mobileScreen.matches) {
  //         nav?.classList.toggle('mobile-show');  // optional chaining
  //       } else {
  //         dashboard?.classList.toggle('dashboard-compact'); // optional chaining
  //       }
  //     });
  //   });

  //   document.querySelectorAll('.dashboard-nav-dropdown-item').forEach((item) => {
  //     if (item.textContent && item.textContent.trim() === 'All') { // vérifier textContent non nul
  //       item.addEventListener('click', (event) => {
  //         this.navigateToProjects();
  //       });
  //     }
  //   });
  // }

  navigateToProjects() {
    this.router.navigateByUrl('/projects');
  }
}
