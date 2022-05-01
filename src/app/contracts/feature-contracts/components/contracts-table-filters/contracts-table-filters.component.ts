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
  contractTypes = [{ name: 'Traditional', code: '1' }];
  status = [
    { name: 'Active', code: '1' },
    { name: 'Pending', code: '2' },
  ];
}
