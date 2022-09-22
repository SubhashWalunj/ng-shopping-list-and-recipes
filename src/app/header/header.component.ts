import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import NAV_ITEMS from 'src/enum/nav-items.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() navItemSelectionEvent = new EventEmitter<NAV_ITEMS>();
  navItems = NAV_ITEMS;

  constructor() {}

  ngOnInit(): void {}

  onNavItemClick = (navItem: NAV_ITEMS) => {
    this.navItemSelectionEvent.emit(navItem);
  };
}
