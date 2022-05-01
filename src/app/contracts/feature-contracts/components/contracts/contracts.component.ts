import { ContractDataAccessService } from './../../../data-access/services/contract-data-access.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { map } from 'rxjs';
@Component({
  selector: 'ontop-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContractsComponent implements OnInit {
  client = 'Moises Leonor';

  contracts$ = this.contractDataAccessService
    .getContracts()
    .pipe(map((response) => response.data));

  constructor(private contractDataAccessService: ContractDataAccessService) {}

  ngOnInit(): void {}
}
