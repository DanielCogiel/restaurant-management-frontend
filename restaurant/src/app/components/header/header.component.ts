import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  headerItems: {url: string, label: string} [] = [
    {
      url: '/customers',
      label: 'Customers'
    },
    {
      url: '/orders',
      label: 'Orders'
    },
    {
      url: '/meals',
      label: 'Meals'
    },
    {
      url: '/ingredients',
      label: 'Ingredients'
    }
  ]
  constructor(private router: Router) {}
  navigateTo(url: string) {
    this.router.navigate([url]);
  }
}
