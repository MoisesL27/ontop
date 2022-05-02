import { Pipe, PipeTransform } from '@angular/core';
import { ContractStatus } from '../../domain';

@Pipe({
  name: 'statusName',
})
export class StatusNamePipe implements PipeTransform {
  transform(value: ContractStatus): string {
    const translationKeys: { [key in ContractStatus]: string } = {
      active: 'contract-active',
      pending: 'contract-pending',
    };

    return translationKeys[value];
  }
}
