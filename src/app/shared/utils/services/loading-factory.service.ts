import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export class Loading {
  private loading: BehaviorSubject<boolean>;

  isLoading$: Observable<boolean>;

  constructor(defaultState = false) {
    this.loading = new BehaviorSubject(defaultState);

    this.isLoading$ = this.loading.asObservable();
  }

  start() {
    this.loading.next(true);
  }

  finish() {
    this.loading.next(false);
  }
}

@Injectable({ providedIn: 'root' })
export class LoadingFactoryService {
  getLoading(defaultState = false) {
    return new Loading(defaultState);
  }
}
