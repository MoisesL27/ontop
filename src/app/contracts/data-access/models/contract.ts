import { ContractStatus, ContractType } from '../../domain';

export interface Contract {
  name: string;
  type: ContractType;
  startDate: string;
  amount: number;
  status: ContractStatus;
}
