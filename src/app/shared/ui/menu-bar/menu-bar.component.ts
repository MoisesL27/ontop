import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BreakPointService } from '@ontop/shared/utils';
@Component({
  selector: 'ontop-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuBarComponent {
  isOpen = false;

  isLargeDevice$ = this.breakPointService.isLargeDevice$;
  items = ['Contracts', 'Documents', 'Payout', 'Time'];

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
