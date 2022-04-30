import { ContractDataAccessService } from './../../../data-access/services/contract-data-access.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
@Component({
  selector: 'ontop-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContractsComponent implements OnInit {
  constructor(private contractDataAccessService: ContractDataAccessService) {}

  ngOnInit(): void {}
}
