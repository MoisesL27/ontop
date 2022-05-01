import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureContractsRoutingModule } from './feature-contracts-routing.module';
import { ContractsComponent } from './components/contracts/contracts.component';
import { TableModule } from 'primeng/table';
import { ContractsTableComponent } from './components/contracts-table/contracts-table.component';
import { MenuModule } from 'primeng/menu';
import { ContractsTableFiltersComponent } from './components/contracts-table-filters/contracts-table-filters.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
@NgModule({
  declarations: [
    ContractsComponent,
    ContractsTableComponent,
    ContractsTableFiltersComponent,
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
  ],
})
export class FeatureContractsModule {}
