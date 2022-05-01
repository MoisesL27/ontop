import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Contract } from './../../../data-access/models/contract';

@Component({
  selector: 'ontop-contracts-table',
  templateUrl: './contracts-table.component.html',
  styleUrls: ['./contracts-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContractsTableComponent {
  @Input() contracts$!: Observable<Contract[]>;
}
