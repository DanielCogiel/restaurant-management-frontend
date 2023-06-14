import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  headerItems: {url: string, label: string}[] = [
    {
      url: '',
      label: 'Customers'
    },
    {
      url: '',
      label: 'Orders'
    },
    {
      url: '',
      label: 'Meals'
    },
    {
      url: '',
      label: 'Ingredients'
    }
  ]

  navigateTo(url: string) {
    console.log(url);
  }
}
