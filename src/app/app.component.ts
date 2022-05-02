import { BreakPointService } from '@ontop/shared/utils';
import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { MenuItem } from './shared/ui';
import { CdkDragEnd } from '@angular/cdk/drag-drop';
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
      iconCssClass: 'icon-user',
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
      iconCssClass: 'icon-document',
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
      iconCssClass: 'icon-payout',
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
      iconCssClass: 'icon-time',
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

  isLargeDevice$ = this.breakPointService.isLargeDevice$;

  constructor(
    private primengConfig: PrimeNGConfig,
    private breakPointService: BreakPointService
  ) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
