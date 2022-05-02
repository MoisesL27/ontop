import { BehaviorSubject, tap } from 'rxjs';
import { BreakPointService } from '@ontop/shared/utils';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'ontop-contracts-table-filters',
  templateUrl: './contracts-table-filters.component.html',
  styleUrls: ['./contracts-table-filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ContractsTableFiltersComponent {
  private showFilters = new BehaviorSubject(true);

  contractTypes = [{ name: 'Traditional', code: '1' }];
  status = [
    { name: 'Active', code: '1' },
    { name: 'Pending', code: '2' },
  ];

  showFilters$ = this.showFilters.asObservable();

  constructor(private breakPointService: BreakPointService) {}

  ngOnInit() {
    this.breakPointService.isSmallDevice$
      .pipe(tap((isSmall) => this.showFilters.next(isSmall)))
      .subscribe();
  }

  toggleFilters() {
    this.showFilters.next(!this.showFilters.value);
  }
}
