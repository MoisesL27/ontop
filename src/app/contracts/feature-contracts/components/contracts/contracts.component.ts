import { ContractDataAccessService } from './../../../data-access/services/contract-data-access.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { map, tap } from 'rxjs';
import { LoadingFactoryService } from '@ontop/shared/utils';
@Component({
  selector: 'ontop-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContractsComponent {
  client = 'Moises Leonor';

  loadingContracts = this.loadingFactoryService.getLoading(true);

  contracts$ = this.contractDataAccessService.getContracts().pipe(
    tap(() => this.loadingContracts.finish()),
    map((response) => response.data)
  );

  constructor(
    private contractDataAccessService: ContractDataAccessService,
    private loadingFactoryService: LoadingFactoryService
  ) {}
}
