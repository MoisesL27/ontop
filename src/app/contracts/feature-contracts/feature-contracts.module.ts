import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureContractsRoutingModule } from './feature-contracts-routing.module';
import { ContractsComponent } from './contracts/contracts.component';


@NgModule({
  declarations: [
    ContractsComponent
  ],
  imports: [
    CommonModule,
    FeatureContractsRoutingModule
  ]
})
export class FeatureContractsModule { }
