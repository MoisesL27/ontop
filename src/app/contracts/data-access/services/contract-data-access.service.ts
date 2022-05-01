import { Contract } from './../models/contract';
import { Injectable } from '@angular/core';
import { ServerResponse } from '@ontop/shared/data-access';
import { delay, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ContractDataAccessService {
  getContracts() {
    const fakeData: Contract[] = [
      {
        name: 'Darlene Robertson',
        type: 'traditional',
        startDate: 'Mar 4, 2021',
        amount: 200,
        status: 'active',
      },
      {
        name: 'Darlene Robertson',
        type: 'traditional',
        startDate: 'Mar 4, 2021',
        amount: 200,
        status: 'active',
      },
      {
        name: 'Darlene Robertson',
        type: 'traditional',
        startDate: 'Mar 4, 2021',
        amount: 200,
        status: 'pending',
      },
    ];

    return of<ServerResponse<Contract[]>>({
      status: true,
      data: fakeData,
      statusCode: 200,
    }).pipe(delay(1000));
  }
}
