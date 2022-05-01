import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BreakPointService } from '@ontop/shared/utils';
import { MenuItem } from './menu-item';
@Component({
  selector: 'ontop-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuBarComponent {
  @Input() items: MenuItem[] = [];

  isOpen = false;
  isLargeDevice$ = this.breakPointService.isLargeDevice$;

  constructor(private breakPointService: BreakPointService) {}

  toggle(event: Event) {
    const item = event.target as HTMLLIElement;

    if (!item.classList.contains('menu-item')) {
      return;
    }

    const checkbox = item.querySelector(
      'input[type="checkbox"]'
    ) as HTMLInputElement;

    if (checkbox) {
      checkbox.checked = !checkbox.checked;
    }
  }
}
