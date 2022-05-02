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

  toggle(event: Event, container: HTMLElement) {
    const target = event.target as HTMLLIElement;
    const item = this.getItem(target, container);

    if (item === null) {
      return;
    }

    if (item.classList.contains('is-link')) {
      this.isOpen = false;

      return;
    }

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

  private getItem(
    element: HTMLElement,
    rootElement: HTMLElement
  ): HTMLElement | null {
    if (!element || element === rootElement) {
      return null;
    }

    if (element.classList.contains('menu-item')) {
      return element;
    }

    return this.getItem(
      element.parentNode as unknown as HTMLElement,
      rootElement
    );
  }
}
