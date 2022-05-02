import { MenuItem } from './shared/ui';

export const items: MenuItem[] = [
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
