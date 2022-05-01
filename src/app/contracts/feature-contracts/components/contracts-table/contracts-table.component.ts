import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Contract } from './../../../data-access/models/contract';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'ontop-contracts-table',
  templateUrl: './contracts-table.component.html',
  styleUrls: ['./contracts-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContractsTableComponent {
  @Input() contracts$!: Observable<Contract[]>;

  actions: MenuItem[] = [
    { label: 'Edit', icon: 'pi pi-pencil' },
    { label: 'Sign', icon: 'pi pi-key' },
    { label: 'View summary', icon: 'pi pi-file' },
    { label: 'Delete', icon: 'pi pi-trash' },
  ];
}
