import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureContractsRoutingModule } from './feature-contracts-routing.module';
import { ContractsComponent } from './components/contracts/contracts.component';
import { TableModule } from 'primeng/table';
import { ContractsTableComponent } from './components/contracts-table/contracts-table.component';

@NgModule({
  declarations: [ContractsComponent, ContractsTableComponent],
  imports: [CommonModule, TableModule, FeatureContractsRoutingModule],
})
export class FeatureContractsModule {}
