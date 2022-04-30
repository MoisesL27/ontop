import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'contracts',loadChildren: ()=> import('./contracts/feature-contracts/feature-contracts.module').then(m=> m.FeatureContractsModule) },
  {path: '', pathMatch: 'full', redirectTo: 'contracts'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
