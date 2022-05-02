import { ContractStatus } from './../../domain';
import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[ontopContractStatus]',
})
export class ContractStatusDirective {
  @Input() status!: ContractStatus;

  @HostBinding('class.chip-active')
  get active() {
    return this.status === 'active';
  }

  @HostBinding('class.chip-pending')
  get pending() {
    return this.status === 'pending';
  }
}
