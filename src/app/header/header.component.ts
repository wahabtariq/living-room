import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  selectedTab: number = 1;

  selectTab(tabNumber: number) {
    this.selectedTab = tabNumber;
  }
}
