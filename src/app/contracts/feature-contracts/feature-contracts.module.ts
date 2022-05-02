import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { ContractsTableFiltersComponent } from './components/contracts-table-filters/contracts-table-filters.component';
import { ContractsTableComponent } from './components/contracts-table/contracts-table.component';
import { ContractsComponent } from './components/contracts/contracts.component';
import { FeatureContractsRoutingModule } from './feature-contracts-routing.module';
import { StatusNamePipe } from './pipes/status-name.pipe';
import { ContractStatusDirective } from './directives/contract-status.directive';
import { ContractTypePipe } from './pipes/contract-type.pipe';

@NgModule({
  declarations: [
    ContractsComponent,
    ContractsTableComponent,
    ContractsTableFiltersComponent,
    StatusNamePipe,
    ContractStatusDirective,
    ContractTypePipe,
  ],
  imports: [
    CommonModule,
    TableModule,
    FeatureContractsRoutingModule,
    MenuModule,
    InputTextModule,
    ButtonModule,
    DropdownModule,
    CalendarModule,
    TranslocoModule,
  ],
})
export class FeatureContractsModule {}
