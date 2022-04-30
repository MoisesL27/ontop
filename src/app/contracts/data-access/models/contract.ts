export interface Contract {
  name: string;
  type: 'traditional';
  startDate: string;
  amount: number;
  status: 'active' | 'pending';
}
