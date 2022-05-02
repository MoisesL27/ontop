import { Pipe, PipeTransform } from '@angular/core';
import { ContractType } from '../../domain';

@Pipe({
  name: 'contractType',
})
export class ContractTypePipe implements PipeTransform {
  transform(value: ContractType): string {
    const translationKeys: { [key in ContractType]: string } = {
      traditional: 'contract-traditional-type',
      custom: 'contract-traditional-custom',
    };

    return translationKeys[value];
  }
}
