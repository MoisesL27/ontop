interface BaseMenuItem {
  cssClasses?: string;
  children?: MenuItem[];
}

interface MenuItemText extends BaseMenuItem {
  text: string;
  type: 'text';
}

interface MenuItemImage extends BaseMenuItem {
  type: 'image';
  url: string;
  alt?: string;
}

export type MenuItem = MenuItemText | MenuItemImage;
