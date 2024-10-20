import { Component, AfterViewInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    if (typeof window !== 'undefined') {
      $(document).ready(() => {
        $(".dropdown").hover(
          function () {
            const dropdown = $(this as HTMLElement); // 'this' refers to the current dropdown
            dropdown.find('.dropdown-menu').stop(true, true).slideDown(400);
            dropdown.toggleClass('open');
          },
          function () {
            const dropdown = $(this as unknown as HTMLElement); // Use 'this' from outer scope
            dropdown.find('.dropdown-menu').stop(true, true).slideUp(400);
            dropdown.toggleClass('open');
          }
        );
      });
    }
  }
}
