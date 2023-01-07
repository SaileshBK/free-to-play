import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-side-bar',
  templateUrl: './main-side-bar.component.html',
  styleUrls: ['./main-side-bar.component.scss'],
})
export class MainSideBarComponent implements OnInit {
  isVisible = true;
  activeRoute = '';
  menuItems : { label: string, route: string }[] = [];

  ngOnInit() {
    this.menuItems = [
      { label: 'Platforms', route: '/platforms' },
      { label: 'Category', route: '/category' },
      { label: 'Search', route: '/search' }
    ];
  }

  toggleSideBar() {
    this.isVisible = !this.isVisible;
  }
  setActiveRoute(route: string) {
    this.activeRoute = route;
  }


}
