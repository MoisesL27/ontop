import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { MenuItem } from './shared/ui';
@Component({
  selector: 'ontop-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  items: MenuItem[] = [
    {
      text: 'Contracts',
      type: 'text',
      children: [
        {
          text: 'Terms And Conditons',
          type: 'text',
        },
      ],
    },
    {
      text: 'Documents',
      type: 'text',
      children: [
        {
          text: 'Upload documents',
          type: 'text',
        },
        {
          text: 'Edit documents',
          type: 'text',
        },
      ],
    },
    {
      text: 'Payout',
      type: 'text',
      children: [
        {
          text: 'Payment methods',
          type: 'text',
        },
        {
          text: 'Payment settings',
          type: 'text',
        },
      ],
    },
    {
      text: 'Time',
      type: 'text',
      children: [
        {
          text: 'Check your time',
          type: 'text',
        },
        {
          text: 'Schedule',
          type: 'text',
        },
      ],
    },
    {
      type: 'image',
      url: '/assets/images/user.png',
      cssClasses: 'user-profile',
      children: [
        {
          text: 'My profile',
          type: 'text',
        },
        {
          text: 'Settings',
          type: 'text',
        },
      ],
    },
  ];

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
