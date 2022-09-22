import { Component } from '@angular/core';
import NAV_ITEMS from 'src/enum/nav-items.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ng-shopping-list-and-recipes';
  navItems = NAV_ITEMS;
  activeNav = NAV_ITEMS.RECIPE;

  onNavItemSelected = (navItem: NAV_ITEMS) => {
    this.activeNav = navItem;
  };
}
