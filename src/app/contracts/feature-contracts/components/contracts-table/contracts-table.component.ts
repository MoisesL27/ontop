import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BreakPointService } from '@ontop/shared/utils';
import { MenuItem } from 'primeng/api';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Contract } from './../../../data-access/models/contract';
@Component({
  selector: 'ontop-contracts-table',
  templateUrl: './contracts-table.component.html',
  styleUrls: ['./contracts-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContractsTableComponent {
  @Input() contracts$!: Observable<Contract[]>;
  @Input() loading$!: Observable<boolean>;

  actions: MenuItem[] = [
    { label: 'Edit', icon: 'icon-edit' },
    { label: 'Sign', icon: 'icon-sign' },
    { label: 'View summary', icon: 'icon-summary' },
    { label: 'Delete', icon: 'icon-delete' },
  ];

  rows$ = this.breakPointService.isLargeDevice$.pipe(
    map((isLargeDevice) => (isLargeDevice ? 5 : 1))
  );

  constructor(private breakPointService: BreakPointService) {}
}
